const { createYield } = require('typescript');
const Request = require('./requestBuilder');

let requester = new Request();

const slack = (parameters) => {
  requester.post('', parameters);
  cy.log(`Sent message: ${parameters.message}`);
};

Cypress.Commands.add('slack', slack);
