/**
 * ErrorHandler and accompanying methods.
 **/
const languageStrings = require('./languageStrings');
const helpHandler = require('./helpHandler');

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    console.log(`Error stack: ${error.stack}`);
    return handlerInput.responseBuilder
      .speak(languageStrings.ERROR_MESSAGE)
      .getResponse();
  },
};

module.exports = {ErrorHandler}