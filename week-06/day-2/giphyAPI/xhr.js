
const apiKey = 'B2ZtXRsm6JpWzhxzqxvdWnyuwlhW4G3b';
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cute-puppies&limit=16&offset=0&rating=G&lang=en`;

const xhr = new XMLHttpRequest();


xhr.open('GET', URL);
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const images = JSON.parse(xhr.responseText).data;
      const mybody = document.querySelector('body');
      for (let i = 0; i < images.length; i ++) {
        let actualImage = document.createElement('img');
        mybody.appendChild(actualImage);
        actualImage.setAttribute('src', images[i].images.original_still.url);
        actualImage.onclick = () => {
          actualImage.setAttribute('src', images[i].images.original.url)
        }
  }
  }
}
}
