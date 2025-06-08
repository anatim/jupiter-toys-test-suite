/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    scrollIntoView(): Chainable<Element>
  }
  
  // Add env() method to the global Cypress interface
  interface Cypress {
    env(key: string): string
    env(key: string, value: string): void
  }
}
