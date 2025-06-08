// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Cypress {
      env(key: string): string
    }
    interface Chainable<Subject = any> {
      scrollToAndType(text: string): Chainable<Subject>;
    }
  }
}

// Import commands.js using ES2015 syntax:
import './commands'

// Add custom commands
Cypress.Commands.add('scrollToAndType', { prevSubject: 'element' }, (subject, text) => {
  cy.wrap(subject).scrollIntoView()
    .should('be.visible')
    .clear()
    .type(text);
});