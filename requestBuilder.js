class RequestBuilder {
  constructor(parameters) {
    this.baseUrl = "https://hooks.slack.com/services/";
    this.slackWebHookID =
      options.slackWebHookID || Cypress.config("Slack").WebhookId;
    this.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  buildOptions(method) {
    return {
      method,
      url: `${this.baseUrl}${this.slackWebHookID}`,
      headers: this.headers,
    };
  }
  request(method, body) {
    //const options = this.buildOptions(method);
    return cy.request(options).its("body");
  }

  post(body) {
    return this.request("POST", body);
  }
}

module.exports = RequestBuilder;
