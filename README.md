# Jupiter Toys Test Suite

This repository contains automated tests for the Jupiter Toys demo application using Cypress and TypeScript.

## Test Cases

1. **Contact form error validation**

   - Verify form validation errors
   - Validate error messages disappear when mandatory fields are filled

2. **Contact form consistent successful submission**

   - Submit contact form
   - Verify confirmation message
   - Runs 5 times with different email addresses

3. **Shop page and cart calculations**
   - Add multiple products to cart
   - Verify individual product prices
   - Verify subtotal calculations
   - Validate total cart value

## Setup

1. Install dependencies:

```bash
npm ci
```

2. Run tests:

```bash
# Run all tests in Chrome browser
npm run test

# Run tests via Cypress UI
npm run test:ui

# Run tests headless
npm run test:headless
```
## CI/CD
The test suite is configured to run `headless` in GitHub Actions:
- Runs on push to main
- Runs on pull requests
- Runs when triggered manually via GitHub Actions - [Cypress Tests workflow](https://github.com/anatim/jupiter-toys-test-suite/actions/workflows/cypress.yml)
- Artifacts intentionally not stored for videos and failure screenshots - this is to be implemented in Cypress Cloud

## Project Structure

- `cypress/e2e/test-case-{number}-*.cy.ts` - Test files
- `cypress/e2e/pageObjects/` - Page Object Model classes
- `cypress/support/` - Support files and custom commands
