export interface parameters {
  parameters: object;
}

declare global {
  namespace Cypress {
    interface Chainable {
      slack(parameters: object): Cypress.Chainable<string>;
    }
  }
}
