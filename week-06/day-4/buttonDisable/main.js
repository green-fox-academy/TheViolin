const catsButton = document.getElementById("cat");
const signUp = document.getElementById("signup");
const dogButton = document.getElementById("dog");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const loveCats = document.getElementById("lovely");
const viktor = document.getElementById("fish")

console.log (dogButton);

dogButton.addEventListener('change', event =>{
  if(signUp.disabled = true){
    signUp.disabled= false; 
  } 
});
catsButton.addEventListener('change', event =>{
  if(signUp.disabled = true){
    signUp.disabled= false; 
  } alert('kkk');
});
yesButton.addEventListener('change', event =>{
  if(loveCats.disabled = true){
    loveCats.disabled= false; 
  }
});
// viktor.addEventListener('change', event =>{
//   if(noButton.addEventListener('change',event=>
//     signUp.disabled= false; 
//   } 
// });
