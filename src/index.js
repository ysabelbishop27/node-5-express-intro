// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------
import express from "express";
import config from "./config.js";
const db = new pg.Pool({
  connectionString: config.databaseUrl,
  ssl: true,
});
const app = express();
app.use(express.json());
const port = 3000; 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
// ---------------------------------
// Helper Functions
// ---------------------------------
function sayHello(name, language) {
  const selectedLanguage = language.toLowerCase();

  if (selectedLanguage === "english") {
    return `Hello, ${name}!`;
  } else if (selectedLanguage === "spanish") {
    return `Hola, ${name}!`;
  } else if (selectedLanguage === "vietnamese") {
    return `Xin chao, ${name}!`;
  } else if (selectedLanguage === "turkish") {
    return `Merhaba, ${name}!`;
  } else {
    return "Language not supported.";
  }
}
// ---------------------------------
// Our very first API Endpoints
// ---------------------------------
app.get("/api", (req, res) => {
  res.send("Welcome to my server!");
});
// --------------------------------
// 🚀 LEVEL 1 CHALLENGES 
// --------------------------------

// 1. 🏆 Add a /goodbye endpoint that responds with "Goodbye, see you later!"
app.get("/api/goodbye", (req, res) => {
  res.send("Goodbye, see you later!");
});
// 2. 🏆 Add a /happy-birthday endpoint that responds with "Happy birthday!!!"
app.get("/api/happy-birthday", (req, res) => {
  res.send("Happy birthday!!!");
});
// --------------------------------
// 🚀 LEVEL 2 CHALLENGES — ADDING DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /happy-birthday/:name endpoint says "Happy birthday, [name]!!!"
app.get("/api/happy-birthday/:name", (req, res) => {
  const name = req.params.name;

  res.send(`Happy birthday, ${name}!!!`);
});

// 2. 🏆 Add a /say-hello/:name/:language endpoint that says hello in multiple languages. Examples:
//      - If language = "English", respond with "Hello, [name]!"
//      - If language = "Spanish", respond with "Hola, [name]!"
//      - If language = "Vietnamese", respond with "Xin chao, [name]!"
//      - If language = "Turkish", respond with "Merhaba, [name]!"
//      - Add as many languages as you want! 
//      - Otherwise, respond with "Language not supported."" 
app.get("/api/say-hello/:name/:language", (req, res) => {
  const { name, language } = req.params;

  const message = sayHello(name, language);

  res.send(message);
});
// --------------------------------
// 🚀 LEVEL 3 CHALLENGES — EVEN MORE DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /calculate-dog-years/:dogName/:humanYears endpoint that calculates a dog's age in dog years. Refer to your dogAgeCalculator.js file. 

// 2. 🏆 Add a /calculate-tip/:bill/:tipPercentage/:numGuests endpoint that calculates the amount each guests owes. Refer to your tipCalculator.js file. 

// --------------------------------
// LEVEL 4 CHALLENGES — USING THE FILE SYSTEM MODULE
// --------------------------------

// 1. 🏆 Add a /get-birthstone/:month endpoint that tells the user the birthstone for the inputted month using the fs module. Use the birthstones-data.json file in this folder.

// 2. 🏆 Add a /get-all-pizza-orders endpoint that responds with the array of pizza orders. Use the pizza-orders-data.json file in this folder.

// 3. 🏆 Add a /get-one-pizza-order/:index endpoint that responds with the specified pizza order. 

// --------------------------------
// 🚀 LEVEL 5 CHALLENGES — USING THIRD-PARTY MODULES
// --------------------------------

// 1. 🏆 Add a /is-leap-year/:year endpoint that responds with whether the specified year is a leap year. Use the moment third-party node module and refer to your leap-year.js file.

// 2. 🏆 Add a /get-signs/:month/:day/:year endpoint that responds with the user's astrological and zodiac signs based on their inputted birthday. Use the horoscope third-party node module and refer to your sign-finder.js file.

