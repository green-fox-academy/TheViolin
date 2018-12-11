const message = document.querySelector('#apple');


function showApple() {
  message.className = "show";
}

setTimeout(showApple, 3000);