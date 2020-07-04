
function showAction() {
  document.getElementById('action').style.visibility = "visible";
}

function showThoughts() {
  document.getElementById('changingThought').innerHTML = "You think<br />...<br />It occurs to you that you like the way the forest's shade feels on a warm day."
  document.getElementById('thought').style.visibility = "visible";
}

function showNoThoughts() {
  document.getElementById('changingThought').innerHTML = "You simply let your mind drift<br />...<br />Letting each thought drift by like a bit of pollen in the breeze."
  document.getElementById('thought').style.visibility = "visible";
}

function showNotice() {
  document.getElementById('changingThought').innerHTML = "You look around<br />...<br />You realize how tall and strong the trees seem to grow in order to escape the shade."
  document.getElementById('thought').style.visibility = "visible";
}