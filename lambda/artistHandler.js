/**
 * CaptureArtistHandler and accompanying methods.
 **/
const message = require('./message');

// Handles user's artist choice and first question
const CaptureArtistHandler = {
  canHandle(handlerInput) {
    console.log('CaptureArtistHandler canHandle');
    
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'CaptureArtistIntent');
  },
  handle(handlerInput) {
    console.log('Starting CaptureArtistHandler');
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    resetAttributes(attributes);

    const artist = handlerInput.requestEnvelope.request.intent.slots.artist.value;
    attributes.artist = artist;
    attributes.artistChosen = true;

    console.log(`artist chosen? ${attributes.artistChosen}`);
    const speakOutput = message.getMessage(attributes);

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt()
      .getResponse();
  }
}

// Reset attributes to initial state
function resetAttributes(attributes) {
  attributes.counter = 0;   // Tracks # of questions asked
  attributes.artistChosen = false;   // Tracks whether artist has been chosen
  attributes.artist = '';
  attributes.answers = [];  // Stores user's quiz responses
  attributes.done = false;
}

module.exports = {
    CaptureArtistHandler
}
