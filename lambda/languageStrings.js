/**
 * Contains useful strings for the skill.
 **/
function selectRandom(list) {
    let index = Math.floor(Math.random() * (list.length)); 
    //console.log(`fun word is ${list[index]}`);
    return list[index];
}
 
module.exports = {
  SKILL_NAME: `Tunes For You`,
  WELCOME_MESSAGE: `Welcome to Tunes For You. I can help you understand which tune by your favorite artist goes best with your life. Please tell me the name of your favorite artist.`,
  WELCOME_REPROMPT: `My favorite artist is Ben Rector. Who's your favorite artist?`,
  ARTIST_MESSAGE: `To get another tune, please tell me the name of an artist.`,
  ARTIST_REPROMPT: `You can choose Ben Rector, Chance the Rapper, Imagine Dragons, or Alec Benjamin. Which will you pick?`,
  STOP_MESSAGE: `Thank you for using Tunes For You!`,
  ARTIST_ERROR: `Sorry, I could not find the artist you requested. To start over, say start over.`,
  SONG_ERROR: `Sorry, I could not find the song you requested. To start over, say start over.`,
  ANSWER_ERROR: `Sorry, I could not find answer you requested. To start over, say start over.`,
  ERROR_MESSAGE: `Sorry, an error occurred. You can choose to start over or exit. What do you want to do?`,
  NEW_QUIZ_PROMPT: `Would you like to get another tune with a different artist?`,
  FUN_WORDS: [
    `Awesome!`,
    `Cool!`,
    `Nice!`,
    `Sweet!`
  ],
  KEEP_GOING: [
    `Don't let the fun stop here!`,
    `Imagine all the possibilities!`,
    `Awesome, that was fun!`,
    `Let's do this again!`
  ],
  selectRandom
}
