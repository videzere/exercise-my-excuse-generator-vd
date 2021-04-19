/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  //console.log("Hello from the console!");
  // let excuse = "My cat ate the homework";
  // document.querySelector("#excuse").innerHTML = excuse;

  let who = [
    "My cat",
    "My parrot",
    "Their mom",
    "The termites",
    "My cousin",
    "The neighbor"
  ];
  let action = [
    "ate",
    "painted",
    "smashed",
    "hid",
    "broken",
    "burnt",
    "cut",
    "shook"
  ];
  let what = [
    "the glasses",
    "the pills",
    "the boat",
    "the cookies",
    "the soda",
    "the book"
  ];
  let when = [
    "after the flight",
    "when the war ended",
    "before the game started",
    "during the conference",
    "before drinking it",
    "during the class"
  ];

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML = `${who[randomWho]} 
    ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;
};
