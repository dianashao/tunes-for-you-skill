/**
 * FallbackHandler and accompanying methods.
 **/
const helpHandler = require('./helpHandler');
 
const FallbackHandler = {
  // The FallbackIntent can only be sent in those locales which support it,
  // so this handler will always be skipped in locales where it is not supported.
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.FallbackIntent';
  },
  handle(handlerInput) {
    return helpHandler.HelpHandler.handle(handlerInput);
  },
};

module.exports = {FallbackHandler}