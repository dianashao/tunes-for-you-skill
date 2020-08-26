/**
 * YesHandler and accompanying methods.
 **/
const languageStrings = require('./languageStrings');
const quizHandler = require('./quizHandler');
const launchHandler = require('./launchHandler');

// Handles user responses with yes intent
const YesHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;

    return request.type === 'IntentRequest'
      && request.intent.name === 'YesIntent';
  },
  handle(handlerInput) {
    console.log('Starting YesHandler');
    const attributes = handlerInput.attributesManager.getSessionAttributes();

    if(!attributes.done) {
        // If quiz not done, receive quiz answer 'yes'
        return quizHandler.outputQuestion(handlerInput, `yes`);
    }
    else {
        // Else prompt user for new artist
        return launchHandler.LaunchRequestHandler.handle(handlerInput);
    }
  }
}

module.exports = {YesHandler}