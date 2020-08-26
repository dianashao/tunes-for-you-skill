/**
 * LaunchRequestHandler and accompanying methods.
 **/
const languageStrings = require('./languageStrings');

// Handles launch request and asks for artist
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || request.type === 'IntentRequest' &&
        request.intent.name === 'AMAZON.StartOverIntent';
  },
  handle(handlerInput) {
    console.log('Starting LaunchRequestHandler');
    const attributes = handlerInput.attributesManager.getSessionAttributes();

    // Say welcome message for first time launching
    if(!attributes.launched) {
      attributes.launched = true;
      return handlerInput.responseBuilder
        .speak(languageStrings.WELCOME_MESSAGE)
        .reprompt(languageStrings.WELCOME_REPROMPT)
        .getResponse();
    }
    else {
      attributes.artistChosen = false;
      return handlerInput.responseBuilder
        .speak(`${getFunWord()} ${languageStrings.ARTIST_MESSAGE}`)
        .reprompt(languageStrings.ARTIST_REPROMPT)
        .getResponse();
    }
  },
};

function getFunWord() {
    return languageStrings.selectRandom(languageStrings.FUN_WORDS);
}

module.exports = {LaunchRequestHandler};