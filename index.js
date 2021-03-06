// let randomWords = require('random-words')
const msg = document.querySelector(".text");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
const hint = document.querySelector("#hint");

// console.log(randomWords())

let play = false;
let newWords = "";
let randWords = "";

// let words = ['elephant', 'lion', 'vulture', 'giraffe', 'python', 'java', 'javascript', 'ruby', 'diamond', 'granite', 'graphene', 'carbon', 'hydrogen', 'oxygen', 'nitrogen', 'uranium', 'nuclear', 'assault', 'khukuri', 'saber', 'flood', 'earthquake', 'volcano', 'landslide', 'avalance']

let words = [
  "lion",
  "elephant",
  "tiger",
  "deer",
  "hyena",
  "leopard",
  "hippo",
  "rhino",
  "cheetah",
  "whale",
  "dolphin",
  "platypus",
  "alligator",
  "crocodile",
  "anaconda",
  "boya",
  "cobra",
  "black-mamba",
  "lizard",
  "spider",
  "ants",
  "cockroach",
  "kissing-bug",
  "housefly",
  "swan",
  "vulture",
  "eagle",
  "danphe",
  "parrot",
  "shoe-bill",
  "woodpekker",
  "king-fisher",
  "shark",
  "sword-fish",
  "angel-fish",
  "octopus",
  "starfish",
  "sponge",
  "earthworm",
  "tapeworm",
  "hookworm",
  "leech",
  "waterbear",
  "amoeba",
  "bacteria",
];

const createNewWords = () => {
  let ranNum = Math.floor(Math.random() * words.length);
  let newTempWords = words[ranNum];
  // console.log(newTempWords.split(""))
  return newTempWords;
};

const breakingWords = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let temp = array[i];
    console.log(temp);
    let j = Math.floor(Math.random() * (i + 1));

    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    btn.innerHTML = "GUESS";
    hint.innerHTML = "HINT?? Click here";
    guess.classList.toggle("hide");
    newWords = createNewWords();
    randWords = breakingWords(newWords.split("")).join("");
    // console.log(randWords)
    msg.innerHTML = `Write the word correctly >>> ${randWords}`;
  } else {
    let tempWord = guess.value;
    console.log("TEMPWORD >>", tempWord.toLowerCase());
    if (tempWord.toLowerCase() === newWords) {
      msg.innerHTML = "Congratulation Dear on correcting the word";
      btn.innerHTML = "Next Word";
      guess.classList.toggle("hide");
      guess.value = "";
      play = false;
    } else {
      // guess.classList.toggle("hide");
      msg.innerHTML = `Sorry Dear! You are incorrect. Please try again! >> ${randWords}`;
      // msg.innerHTML = `Sorry Dear! You are incorrect. Correct word was >>> ${newWords}`;

      btn.innerHTML = "Try Again?";
      // play = false;
    }
  }
});

hint.addEventListener("click", () => {
  hint.innerHTML = newWords;
});
