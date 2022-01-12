class RequestBuilder {
  constructor(parameters) {
    this.baseUrl = 'https://hooks.slack.com/services/';
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  buildOptions(method, slackId) {
    return {
      method,
      url: `${this.baseUrl}${slackId}`,
      headers: this.headers,
    };
  }
  buildDefaults() {
    return {
      username: 'Cypress-Slack',
      icon_emoji: ':heart:',
    };
  }

  request(method, parameters) {
    if (!parameters.hasOwnProperty('message')) {
      throw new Error('No parameter message provided');
    }
    if (!parameters.hasOwnProperty('slackId')) {
      throw new Error('No parameter slackId provided');
    }
    let options = this.buildOptions(method, parameters.slackId);
    let payload = this.buildDefaults();
    payload.text = parameters.message;
    options.body = payload || {};
    return cy.request(options).its('body');
  }

  post(parameters) {
    cy.log(parameters);
    return this.request('POST', parameters);
  }
}

module.exports = RequestBuilder;
