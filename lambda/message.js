/**
 * Contains functionality to create a message for user output.
 **/
const languageStrings = require('./languageStrings');
const data = require('./data');
const helpHandler = require('./helpHandler');

function getMessage(attributes) {
  const artist = attributes.artist;
  attributes.artistChosen = true;
  console.log(`artist is ${artist}`);
  const count = attributes.counter;
  const question = data.getQuestion(artist, count);
  let message;

  if(count === 0) {
    let article;
    // If artist name starts with vowel, use 'an'
    if(artist.substring(0,1).toLowerCase().match(/[aeiou]/)) {
        article = 'an';
    }
    else {
        article = 'a';
    }
    message = `Thanks. ${artist}. Now please answer
      these three questions to help me pick ${article} ${artist} tune for you.
      First, ${question}`;
  }
  else if(count === 1) {
    message = `Next question. ${question}`;
  }
  else if(count === 2) {
    message = `Last question. ${question}`;
  }
  else if(count === 3) {
    const songResult = data.calculateResult(artist, attributes.answers);
    message = `Based on your answers, your ${artist} tune is ${songResult}. ${getFunPhrase()} ${languageStrings.NEW_QUIZ_PROMPT}`;
    attributes.done = true;
    return message;
  }
  else {
    message = languageStrings.ERROR_MESSAGE;
  }
  attributes.counter++;
  return message;
}

function getFunPhrase() {
    return languageStrings.selectRandom(languageStrings.KEEP_GOING);
}

module.exports = {
  getMessage
}
