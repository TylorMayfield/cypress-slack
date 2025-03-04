# cypress-slack

[![Node.js Package](https://github.com/TylorMayfield/cypress-slack/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/TylorMayfield/cypress-slack/actions/workflows/npm-publish.yml)

A Cypress plugin that allows you to send messages to Slack directly from your tests.

## Installation

Install `cypress-slack` as a development dependency:

```sh
npm install cypress-slack --save-dev
```

Then, import the plugin in your Cypress support file (e.g., `cypress/support/index.js` or `cypress/support/e2e.js`):

```js
require('cypress-slack');
```

## Usage

Use the `cy.slack` command to send messages to Slack from within your Cypress tests.

### Example

```javascript
describe('Slack Notification Test', () => {
  it('Sends a message to Slack', () => {
    cy.slack({
      slackId: '{SlackIncomingWebhookId}',
      message: 'This is a test message from Cypress!',
    });
  });
});
```

## Configuration

Ensure you have a valid Slack Incoming Webhook URL. You can set it as an environment variable in `cypress.config.js` to keep your credentials secure:

```js
module.exports = {
  env: {
    slackWebhookUrl: 'https://hooks.slack.com/services/your/webhook/url'
  }
};
```

Then, reference it in your test:

```javascript
cy.slack({
  slackId: Cypress.env('slackWebhookUrl'),
  message: 'Cypress test run completed!'
});
```

## Features
- ✅ Easily send Slack messages from Cypress tests
- ✅ Simple integration with Slack Incoming Webhooks
- ✅ Supports custom messages and notifications

## Contributing
Pull requests are welcome! If you'd like to contribute, please open an issue or submit a PR.

## License
This project is licensed under the [MIT License](LICENSE).
