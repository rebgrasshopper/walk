
// ARRAY VARIABLES

const prose = {meadow:
  {thoughts:[
  "Considering your day up until now, you decide that letting yourself relax is truly satisfying.",
  "You'd like to come here a little more often. It can be nice to get out into the fresh air.",
  "Something has been at the back of your mind all day, just out of reach, and you decide to let it go. It will come to you or it won't.",
  "You contemplate the soft swishing of the wind through the tall grasses. It seems like an innately relaxing sound.",
  "This week has felt rough, but looking at it from the other side, you can see where you've made some steps towards growth.",
], notices:[
  "You notice a little brown bird rustling for a moment before popping out of the grasses and flitting towards the woods.",
  "The heat of the sun on your skin is just a little too warm in an almost delicious way.",
  "There are so many different tiny flowers in the grasses! You almost hadn't noticed them behind the bigger flowers dotting the field.",
  "You think you can hear the sound of a dog barking in the distance. Someone must be taking a walk with their pet.",
  "A few feet away you see a gray-green lizard sunning themselves on a small, jagged boulder.",
]}, sky:
{thoughts:[
"You lazily ponder what you'll have for dinner tonight.",
"You think you'd like to come here a little more often. It can be nice to get out into the fresh air.",
"You consider that it's been some time since you spent time alone in nature.",
"You remind yourself that when anxiety arises, you can still breathe deeply, and just look at the clouds.",
"You imagine that the sunrise must be spectaculate here.",
], notices:[
"You see a cloud that looks like an apatosaurus.",
"The clouds are drifting by in the sky, and you feel the breeze on your skin. You wonder if they're the same breeze.",
"One cloud looks kind of like a cat... or a wombat? That wants to be let in a door.",
"The blue of the sky is so intense at this time of day.",
"High above, a hawk rides the thermals.",
]}, woods:
{thoughts:[
  "It occurs to you that you like the way the forest's shade feels on a warm day.",
  "Ponderings the movement of the leaves in the breeze sends you into a daydream about mathmatically modeling the movements of nature.",
  "Considering your day up until now, you decide that letting yourself relax is truly satisfying.",
  "It suddenly crosses your mind to wonder about your best friend when you were six. What are they doing now? What was their name even? You hope they're doing really well.",
  "It dawns on you actually know what to do about a problem you've been having, and now you just need to figure out how.",
], notices:[
  "You notice a tree squirrel glaring at you from a nearby branch. You look down to see acorns littering the ground where you are.",
  "The sunbeams making their way through the leafy canopy build a beautiful picture of glowing warmth on the forest floor",
  "Down by your feet, you see a beetle trundling across the path, seemingly oblivious to the larger world around it.",
  "The earthy, piney scent of the forest suffuses the air around you, and you pause to see if you can smell any other details.",
  "You realize how tall and strong the trees seem to grow in order to escape the shade.",
]}};




//ELEMENT VARIABLES

//ACTION BUTTONS
const thinkLink = document.getElementById("think");
const noThinkLink = document.getElementById("no-think");
const noticeLink = document.getElementById("notice");
const stayLink = document.getElementById("stay");


//CHANGED DIVS
const thoughtBox = document.getElementById('thought');
const changingThought = document.getElementById('changingThought');
const stayAction = document.getElementById('action');




//TIMER VARIABLES
let mindTime;
let stayTime;




// HELPER FUNCTIONS

function randomNum(num) {
  return Math.floor(Math.random() * (num));
}

function findLine(start, type) {
  let location = start.parentElement.parentElement.parentElement.parentElement.classList[2];
  let arrayOfProse = prose[location][type];
  return arrayOfProse[randomNum(arrayOfProse.length)]

}


// SHOW/HIDE FUNCTIONS

function showAction() {
  clearTimeout(stayTime);
  stayAction.style.visibility = "visible";
  stayTime = setTimeout(() => { document.getElementById('action').style.visibility = "hidden"; }, 11000);
}

function showThoughts(event) {
  clearTimeout(mindTime);
  changingThought.innerHTML = findLine(event.target, "thoughts");
  thoughtBox.style.visibility = "visible";
  mindTime = setTimeout(() => { thoughtBox.style.visibility = "hidden"; }, 5000);
}

function showNoThoughts() {
  clearTimeout(mindTime);
  changingThought.innerHTML = "You simply let your mind drift<br />...<br />Letting each thought drift by like a bit of pollen in the breeze.";
  thoughtBox.style.visibility = "visible";
  mindTime = setTimeout(() => { thoughtBox.style.visibility = "hidden"; }, 5000);
}

function showNotice(location) {
  clearTimeout(mindTime);
  changingThought.innerHTML = findLine(event.target, "notices");
  thoughtBox.style.visibility = "visible";
  mindTime = setTimeout(() => { thoughtBox.style.visibility = "hidden"; }, 5000);
} 




//ACTUALLY DO STUFF

thinkLink.addEventListener("click", showThoughts);
noThinkLink.addEventListener("click", showNoThoughts);
noticeLink.addEventListener("click", showNotice);
stayLink.addEventListener("click", showAction);