
// VARIABLES

var woodsThoughts = [
  "You think<br />...<br />It occurs to you that you like the way the forest's shade feels on a warm day.",
  "You think<br />...<br />Ponderings the movement of the leaves in the breeze sends you into a daydream about mathmatically modeling the movements of nature.",
  "You think<br />...<br />Considering your day up until now, you decide that letting yourself relax is truly satisfying.",
  "You think<br />...<br />It suddenly crosses your mind to wonder about your best friend when you were six. What are they doing now? What was their name even? You hope they're doing really well.",
  "You think<br />...<br />It dawns on you actually know what to do about a problem you've been having, and now you just need to figure out how.",
]


var woodsNotices = [
  ""
]



// HELPER FUNCTIONS

function randomNum(min, max) {
  return Math.random() * (max-min) + min;
}



// FUNCTIONS

function showAction() {
  document.getElementById('action').style.visibility = "visible";
  setTimeout(() => { document.getElementById('action').style.visibility = "hidden"; }, 15000);
}

function showThoughts() {
  document.getElementById('changingThought').innerHTML = woodsThoughts[Math.floor(randomNum(1,6))-1];
  document.getElementById('thought').style.visibility = "visible";
  setTimeout(() => { document.getElementById('thought').style.visibility = "hidden"; }, 15000);
}

function showNoThoughts() {
  document.getElementById('changingThought').innerHTML = "You simply let your mind drift<br />...<br />Letting each thought drift by like a bit of pollen in the breeze.";
  document.getElementById('thought').style.visibility = "visible";
  setTimeout(() => { document.getElementById('thought').style.visibility = "hidden"; }, 15000);
}

function showNotice() {
  document.getElementById('changingThought').innerHTML = "You look around<br />...<br />You realize how tall and strong the trees seem to grow in order to escape the shade.";
  document.getElementById('thought').style.visibility = "visible";
  setTimeout(() => { document.getElementById('thought').style.visibility = "hidden"; }, 15000);
}

