const { createYield } = require('typescript');
const Request = require('./requestBuilder');

let requester = new Request();

const slack = (parameters) => {
  cy.log(`Sent message: ${parameters.message}`);
  requester.post(parameters);
};

Cypress.Commands.add('slack', slack);
