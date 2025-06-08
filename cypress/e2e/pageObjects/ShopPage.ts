export class ShopPage {
  addProduct(productName: string, quantity: number) {
    // The product cards have the price and buy button
    for (let i = 0; i < quantity; i++) {
      cy.contains('.product-title', productName)
        .parents('.product')
        .find('.btn-success')
        .click();
    }
  }

  getProductPrice(productName: string) {
    return cy.contains('.product-title', productName)
      .parents('.product')
      .find('.product-price');
  }
}
