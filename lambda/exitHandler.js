/**
 * ExitHandler and accompanying methods.
 **/
const languageStrings = require('./languageStrings');

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    const attributes = handlerInput.attributesManager.getSessionAttributes();

    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(languageStrings.STOP_MESSAGE)
      .getResponse();
  },
};

module.exports = {ExitHandler}