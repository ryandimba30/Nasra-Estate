//Alert function
document.querySelector('#Get').addEventListener('click',
       () => alert('Getting Started'));

 //Alert function
document.querySelector('#Get').addEventListener('click',
() => alert('Getting Started'));

//Alert function
document.querySelector('#View').addEventListener('click',
       () => alert('View more'));

      
const randomSee = document.getElementById("see");
const display = document.getElementById("display")
randomSee.addEventListener('click',randomPics);
let random
function randomPics(){
  fetch('https://www.pexels.com/api')
  .then((response )=> response.json())
  .then((data) => {
  console.log(data.image)
  display.innerHTML="<img src="+data.image +" width='200px' height='200px'/>";
});
}
let flataTitle = document.getElementById("Get started");
let flataimage = document.getElementById("Get started");
let flataView = document.querySelector("View");
function renderContent(data) {
  flataTitle.innerText = data.title;
  flataImage.src = data.image;
  flatalikeBtn.innerHTML = data.likes;
}
mainForm = document.getElementById("comment-form");
mainForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let newInput = document.createElement("li");
  newInput.innerText = comment.value;
  flataComment.append(newInput);
  e.target.reset();
});
let num = 0;
viewBtn.addEventListener("View", function(){
  num = num + 1;
  flatalikeBtn.innerText = num + " Get started";
});
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '25abe8c41cmsh2c11a550467a1f1p19fa9ejsn3cca9fa6752c',
		'X-RapidAPI-Host': 'real-estate-usa.p.rapidapi.com'
	}
};

fetch('https://real-estate-usa.p.rapidapi.com/api/v1/properties?postal_code=94105&offset=0&limit=200', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
