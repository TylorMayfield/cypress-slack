class RequestBuilder {
  constructor() {
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
      icon_url: 'https://th.bing.com/th/id/OIP.cSD32quvq1Cpc0EfvJekRwHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.1&pid=1.7',
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

  post(body) {
    return this.request('POST', body);
  }
}

module.exports = RequestBuilder;
