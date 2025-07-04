/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      getByDataTest(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add("getByDataTest", (dataTestAttribute) => {
  return cy.get(`[data-testid="${dataTestAttribute}"]`);
});
