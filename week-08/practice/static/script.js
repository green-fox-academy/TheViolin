const form = document.querySelector('.post');
const { url, alias } = form.elements; 
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const postXHR = new XMLHttpRequest();
  postXHR.open('POST', '/api/links');
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    url: url.value,
    alias: alias.value
  }));
  postXHR.onload = () => {
    console.log(JSON.parse(postXHR.responseText));
  }
});