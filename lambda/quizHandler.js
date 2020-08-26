/**
 * QuizHandler and accompanying methods.
 **/
const message = require('./message');

// Handles quiz answers and restart intent
const QuizHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    
    return request.type === 'IntentRequest'
      && (request.intent.name === 'QuizAnswerIntent');
  },
  handle(handlerInput) {
    console.log('Starting QuizHandler');
    
    // Get answer from slot
    const answer = handlerInput.requestEnvelope.request.intent.slots.answer.value;
    console.log(`Answer is ${answer}`);
    const attributes = handlerInput.attributesManager.getSessionAttributes();

    return outputQuestion(handlerInput, answer);
  }
}

// Output a question given an input answer
function outputQuestion(handlerInput, answer) {
    const attributes = handlerInput.attributesManager.getSessionAttributes();

    // Store answer in list of answers
    attributes.answers.push(answer);

    const speakOutput = message.getMessage(attributes);
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt()
      .getResponse();
}

module.exports = {
    QuizHandler,
    outputQuestion
}