/**
 * NoHandler and accompanying methods.
 **/
const languageStrings = require('./languageStrings');
const quizHandler = require('./quizHandler');

// Handles user responses with no intent
const NoHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === 'IntentRequest'
            && request.intent.name === 'NoIntent';
    },
    handle(handlerInput) {
        console.log('Starting NoHandler');
        const attributes = handlerInput.attributesManager.getSessionAttributes();
        if(!attributes.done) {
            // If quiz not done, receive quiz answer 'no'
            return quizHandler.outputQuestion(handlerInput, `no`);
            }
            else {
            // Else exit program
                return handlerInput.responseBuilder
                    .speak(languageStrings.STOP_MESSAGE)
                    .getResponse();
            }
    }
}

module.exports = {NoHandler}
