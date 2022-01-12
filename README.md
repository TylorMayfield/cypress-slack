# cypress-slack

Cypress slack plugin to send messages from within a test

### Installation

```sh
npm install cypress-slack --save-dev
```

Once downloaded, add the following line to `cypress/support/index.js` to import the commands into your Cypress project:

```js
require('cypress-slack');
```

### Example Usage

````javascript
      cy.slack({
        slackId: '{SlackIncomingWebhookId}',
        message: 'This is a test',
      });
````
