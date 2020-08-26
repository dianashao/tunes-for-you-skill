/**
 * Contains artist data and methods for the skill.
 **/

const languageStrings = require('./languageStrings');

// Finds correct question given an artist and question number
function getQuestion(artist, count) {
  const artistIndex = getArtistIndex(artist);
  if(artistIndex === -1) {
    return languageStrings.ARTIST_ERROR;
  }
  return DATA_ARRAY[artistIndex].questions[count];
}

// Finds the artist index in the data array
function getArtistIndex(artist) {
  for(let i = 0; i < DATA_ARRAY.length; i++) {
    if(DATA_ARRAY[i].artist.toLowerCase() === artist.toLowerCase()) {
      return i;
    }
    else if(DATA_ARRAY[i].artist.toLowerCase().includes(artist.toLowerCase())) {
      artist = DATA_ARRAY[i].artist;  // Set artist to full name if using partial name
      return i;
    }
  }
  return -1;
}

// Finds the matching answer index in the data array
function getAnswerIndex(artist, answer, questionIndex) {
  console.log(`getting answer index for artist ${artist}, question ${questionIndex}, answer ${answer}`);
  const artistIndex = getArtistIndex(artist);
  
  const questionAnswers = DATA_ARRAY[artistIndex].answers[questionIndex];
  for(let j = 0; j < questionAnswers.length; j++) {
    // Get answer choices for specified question
    const answerChoices = questionAnswers[j];
    for(let k = 0; k < answerChoices.length; k++) {
      // Iterate through answer word variations and find matching word
      if(answer.toLowerCase().includes(answerChoices[k])) {
        console.log(`Found index for ${answer}: ${j}`);
        return j;
      }
    }
  }
  return languageStrings.ANSWER_ERROR;
}

// Calculates quiz result
function calculateResult(artist, answers) {
  const artistIndex = getArtistIndex(artist);
  console.log(`answers 0 is ${answers[0]} answers 1 is ${answers[1]} answers 2 is ${answers[2]}`);
  const songIndex = 4 * getAnswerIndex(artist, answers[0], 0)
    + 2 * getAnswerIndex(artist, answers[1], 1)
    + getAnswerIndex(artist, answers[2], 2);
  return (songIndex >= 0 && songIndex < 12) ?
    DATA_ARRAY[artistIndex].songs[songIndex] : languageStrings.SONG_ERROR;
}

// Array of all quiz-related data
const DATA_ARRAY = [
    {artist: `Ben Rector`,
      questions: [
        `What's your spirit animal, dog, cat, or fish?`,
        `It's the weekend. Would you rather stay at home or go out and party?`,
        `Vine or Tiktok?`
      ],
      answers: [[
        [`dog`, `dogg`],
        [`cat`],
        [`fish`, `phish`]
      ], [
        [`stay home`, `stay`, `home`],
        [`go out and party`, `go`, `out`, `party`]
      ], [
        [`vine`, `fine`],
        [`tiktok`, `tic`, `toc`]
      ]],
      songs: [
        `Old Friends`,
        `She Is`,
        `Forever Like That`,
        `Brand New`,
        `I Will Always Be Yours`,
        `Love Like This`,
        `Drive`,
        `When A Heart Breaks`,
        `Sailboat`,
        `Duo`,
        `Extraordinary Magic`,
        `30000 Feet`
      ]},
    {artist: `Chance the Rapper`,
      questions: [
        `Which sport do you prefer? Basketball, football, or soccer?`,
        `What's more important, looks or personality?`,
        `Does pineapple belong on pizza?`
      ],
      answers: [[
        [`basketball`],
        [`football`],
        [`soccer`],
      ], [
        [`looks`, `lux`],
        [`personality`]
      ], [
        [`yes`],
        [`no`]
      ]],
      songs: [
        `Juke Jam`,
        `Placeholder`,
        `Blessings`,
        `No Problem`,
        `Hot Shower`,
        `Cocoa Butter Kisses`,
        `Favorite Song`,
        `Juice`,
        `All Day Long`,
        `Summer Friends`,
        `Brain Cells`,
        `All We Got`,
        `Angels`,
      ]},
    {artist: `Imagine Dragons`,
      questions: [
        `Would you rather have an extra finger or an extra toe?`,
        `You win the lottery! Do you spend it all or save the money?`,
        `Toilet paper over or under?`
      ],
      answers: [[
        [`extra finger`, `finger`],
        [`extra toe`, `toe`]
      ], [
        [`spend it all`, `spend`],
        [`save the money`, `save`]
      ], [
        [`over`],
        [`under`]
      ]],
      songs: [
        `Believer`,
        `Thunder`,
        `Natural`,
        `Radioactive`,
        `Demons`,
        `Sucker for Pain`,
        `Whatever it Takes`,
        `It's Time`,
        `Birds`,
        `On Top of the World`,
        `Trouble`,
        `Walking the Wire`,
        `Warriors`,
      ]},
    {artist: `Alec Benjamin`,
      questions: [
        `How many siblings do you have?`,
        `You're on your first date. Are you at an expensive restaurant or a fast food joint?`,
        `Dogs or cats?`
      ],
      answers: [[
        [`zero`, `0`, `none`, `don't`],
        [`one`, `1`],
        [`more than one`, ``] // Represents > 1 (any other input)
      ], [
        [`expensive restaurant`, `expensive`, `restaurant`],
        [`fast food joint`, `fast`, `joint`]
      ], [
        [`dog`],
        [`cat`]
      ]],
      songs: [
        `Let Me Down Slowly`,
        `Water Fountain`,
        `Boy In The Bubble`,
        `If We Have Each Other`,
        `My Mothers Eyes`,
        `Outrunning Karma`,
        `Jesus in LA`,
        `Mind Is A Prison`,
        `Must Have Been The Wind`,
        `Paper Crown`,
        `Gotta Be A Reason`,
        `Love Is a Fragile Dance`,
        `Steve`,
      ]}
]

module.exports = {
    DATA_ARRAY,
    getQuestion,
    getArtistIndex,
    getAnswerIndex,
    calculateResult
}