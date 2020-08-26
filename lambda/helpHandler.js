/**
 * HelpHandler and accompanying methods.
 **/
const languageStrings = require('./languageStrings');
const data = require('./data');

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    console.log('Starting HelpHandler');
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    return handlerInput.responseBuilder
      .speak(getHelp(attributes))
      .reprompt(languageStrings.HELP_MESSAGE)
      .getResponse();
  },
};

function getHelp(attributes) {
  console.log(`getHelp`);
  let speakOutput;
  if(!attributes.artistChosen) {
      // List artist choices for user
      speakOutput = languageStrings.ARTIST_REPROMPT;
  }
  else {
      // List answer choices for user
      speakOutput = `You can choose between `;
      const answers = data.DATA_ARRAY[data.getArtistIndex(attributes.artist)].answers;
      const choices = answers[attributes.counter - 1];
      console.log(`artist index is ${data.getArtistIndex(attributes.artist)}`);

      for(let i = 0; i < choices.length; i++) {
          console.log(`answers[${i}] is ${answers[i]}`);
          console.log(`answers[${i}][0] is ${answers[i][0]}`);

          speakOutput += choices[i][0];
          if(i === choices.length - 2) {
              speakOutput += `, or `;
          }
          else {
              speakOutput += `, `;
          }
      }
      speakOutput += `Which will you choose?`;
  }
  return speakOutput;
}

module.exports = {HelpHandler}