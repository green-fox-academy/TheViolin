const message = document.querySelector('#apple');
const message1 = document.querySelector('#pear');
const message2 = document.querySelector('#melon');
const message3 = document.querySelector('#grapes');


function showApple() {
  message.className = "show";
}
function showPear() {
  message1.className = "show";
}
function showMelon() {
  message2.className = "show";
}
function showGrapes() {
  message3.className = "show";
}

setTimeout(showApple, 0);
setTimeout(showPear, 1000);
setTimeout(showMelon, 3000);
setTimeout(showGrapes, 5000);

