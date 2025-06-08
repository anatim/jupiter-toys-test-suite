export class CartPage {
  getProductRow(productName: string) {
    return cy.contains('tr', productName);
  }

  getProductPrice(productName: string) {
    return this.getProductRow(productName).find('td').eq(1);
  }

  getProductQuantity(productName: string) {
    return this.getProductRow(productName).find('input[type="number"]');
  }

  getProductSubtotal(productName: string) {
    return this.getProductRow(productName).find('td').eq(3);
  }

  getTotal() {
    return cy.get('.total');
  }
  // Helper method to parse price strings
  parsePriceString(price: string): number {
    // Remove currency symbol and any text like "Total: " before parsing
    return parseFloat(price.replace('$', '').replace('Total:', '').trim());
  }

  // Verify product details
  verifyProductDetails(productName: string, expectedPrice: number, quantity: number) {
    this.getProductPrice(productName).invoke('text').then((priceText: string) => {
      const price = this.parsePriceString(priceText);
      expect(price).to.equal(expectedPrice);
      
      this.getProductSubtotal(productName).invoke('text').then((subtotalText: string) => {
        const subtotal = this.parsePriceString(subtotalText);
        expect(subtotal).to.equal(price * quantity);
        return subtotal;
      });
    });
  }
}
