/**
 * Module to import all needed handlers and create a skillBuilder
 **/
const Alexa = require('ask-sdk-core');
const launchHandler = require('./launchHandler');
const yesHandler = require('./yesHandler');
const noHandler = require('./noHandler');
const quizHandler = require('./quizHandler');
const artistHandler = require('./artistHandler');
const helpHandler = require('./helpHandler');
const exitHandler = require('./exitHandler');
const fallbackHandler = require('./fallbackHandler');
const errorHandler = require('./errorHandler');
const sessionEndedHandler = require('./sessionEndedHandler');

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    launchHandler.LaunchRequestHandler,
    yesHandler.YesHandler,
    noHandler.NoHandler,
    artistHandler.CaptureArtistHandler,
    quizHandler.QuizHandler,
    helpHandler.HelpHandler,
    exitHandler.ExitHandler,
    fallbackHandler.FallbackHandler,
    sessionEndedHandler.SessionEndedRequestHandler
  )
  .addErrorHandlers(errorHandler.ErrorHandler)
  .lambda();
