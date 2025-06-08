export class HomePage {  
  visit() {
    cy.visit(Cypress.env('baseUrl'));
  }

  goToContactPage() {
    cy.get('a[href="#/contact"]').click();
  }

  goToShopPage() {
    cy.get('a[href="#/shop"]').click();
  }

  goToCartPage() {
    cy.get('a[href="#/cart"]').click();
  }
}
