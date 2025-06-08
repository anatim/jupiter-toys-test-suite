export class ContactPage {
  private formSelector = 'form[name="form"]';
  private submitButtonSelector = '.btn-contact';
  private successMessageSelector = '.alert.alert-success';
  private loadingModalSelector = 'div.popup.modal';

  clickSubmit(expectSuccess = false) {
    // Submit without filling input fields to trigger validation errors
    cy.get(this.submitButtonSelector)
      .should('be.visible')
      .click();
    
    if (expectSuccess) {
      // For successful submission where mandatory input fields are filled, ensure success message is displayed
      cy.get(this.loadingModalSelector).should('be.visible');
      cy.get(this.loadingModalSelector).should('not.be.visible');
      cy.get(this.successMessageSelector, { timeout: 10000 }).should('be.visible');
    }
  }

  clickBackButton() {    
    cy.get('a.btn[ng-click="goBack()"]')
      .should('be.visible')
      .click();
    // Ensure form is ready for interaction
    cy.get(this.formSelector).should('exist');
    cy.wait(500);
  }

  goToContactForm() {  
    // Go back to contact from from the page with successful submission message
    cy.get('body').then(($body) => {
      if ($body.find(this.successMessageSelector).length > 0) {
        this.clickBackButton();
      }
    });
    // Ensure form is ready for interaction
    cy.get(this.formSelector).should('exist');
    cy.wait(500);
  }

  fillMandatoryFields({forename, email, message}: {forename: string, email: string, message: string}) {    
    cy.get('#forename').should('be.visible').type(forename);
    cy.get('#email').should('be.visible').type(email);
    cy.get('#message').should('be.visible').type(message);
  }

  getSuccessMessage() {
    return cy.get(this.successMessageSelector);
  }
  validateErrorMessage(field: string, message: string) {
    // Check for error messages
    cy.get(`#${field}`).parent().find('span')
      .should('be.visible').and('contain.text', message);
  }

  verifyNoErrorMessages() {
    cy.get('span[ng-show*="required"]').should('not.exist');
  }
}
