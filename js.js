
// VARIABLES

var woodsThoughts = [
  "You think<br />...<br />It occurs to you that you like the way the forest's shade feels on a warm day.",
  "You think<br />...<br />Ponderings the movement of the leaves in the breeze sends you into a daydream about mathmatically modeling the movements of nature.",
  "You think<br />...<br />Considering your day up until now, you decide that letting yourself relax is truly satisfying.",
  "You think<br />...<br />It suddenly crosses your mind to wonder about your best friend when you were six. What are they doing now? What was their name even? You hope they're doing really well.",
  "You think<br />...<br />It dawns on you actually know what to do about a problem you've been having, and now you just need to figure out how.",
];

var woodsNotices = [
  "You look around<br />...<br />You notice a tree squirrel glaring at you from a nearby branch. You look down to see acorns littering the ground where you are.",
  "You look around<br />...<br />The sunbeams making their way through the leafy canopy build a beautiful picture of glowing warmth on the forest floor",
  "You look around<br />...<br />Down by your feet, you see a beetle trundling across the path, seemingly oblivious to the larger world around it.",
  "You look around<br />...<br />The earthy, piney scent of the forest suffuses the air around you, and you pause to see if you can smell any other details.",
  "You look around<br />...<br />You realize how tall and strong the trees seem to grow in order to escape the shade.",
];

var meadowThoughts = [
  "You think<br />...<br />Considering your day up until now, you decide that letting yourself relax is truly satisfying.",
  "You think<br />...<br />You'd like to come here a little more often. It can be nice to get out into the fresh air.",
  "You think<br />...<br />Something has been at the back of your mind all day, just out of reach, and you decide to let it go. It will come to you or it won't.",
  "You think<br />...<br />You contemplate the soft swishing of the wind through the tall grasses. It seems like an innately relaxing sound.",
  "You think<br />...<br />This week has felt rough, but looking at it from the other side, you can see where you've made some steps towards growth.",
];

var meadowNotices = [
  "You look around<br />...<br />You notice a little brown bird rustling for a moment before popping out of the grasses and flitting towards the woods.",
  "You look around<br />...<br />The heat of the sun on your skin is just a little too warm in an almost delicious way.",
  "You look around<br />...<br />There are so many different tiny flowers in the grasses! You almost hadn't noticed them behind the bigger flowers dotting the field.",
  "You look around<br />...<br />You think you can hear the sound of a dog barking in the distance. Someone must be taking a walk with their pet.",
  "You look around<br />...<br />A few feet away you see a gray-green lizard sunning themselves on a small, jagged boulder.",
];



// HELPER FUNCTIONS

function randomNum(min, max) {
  return Math.random() * (max-min) + min;
}



// FUNCTIONS

function showAction() {
  document.getElementById('action').style.visibility = "visible";
  setTimeout(() => { document.getElementById('action').style.visibility = "hidden"; }, 15000);
}

function showThoughts(location) {
  document.getElementById('changingThought').innerHTML = location[Math.floor(randomNum(1,6))-1];
  document.getElementById('thought').style.visibility = "visible";
  setTimeout(() => { document.getElementById('thought').style.visibility = "hidden"; }, 15000);
}

function showNoThoughts() {
  document.getElementById('changingThought').innerHTML = "You simply let your mind drift<br />...<br />Letting each thought drift by like a bit of pollen in the breeze.";
  document.getElementById('thought').style.visibility = "visible";
  setTimeout(() => { document.getElementById('thought').style.visibility = "hidden"; }, 15000);
}

function showNotice(location) {
  document.getElementById('changingThought').innerHTML = location[Math.floor(randomNum(1,6))-1];
  document.getElementById('thought').style.visibility = "visible";
  setTimeout(() => { document.getElementById('thought').style.visibility = "hidden"; }, 15000);
}

