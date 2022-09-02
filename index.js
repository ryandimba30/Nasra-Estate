// function displayComments(comments) {
//     commentsList.innerHTML = "";
//     comments.forEach(displayComment)
// }
// function displayComment(comment) {
//     const newComment = document.createElement('li');
//     newComment.textContent = comment.content;
//     commentsList.append(newComment);
// }
// function addNewComment() {
//     commentsList.addEventListener('submit', addComment)
// }
// function addComment(event) {
//     event.preventDefault();
//     const newPostedComment = event.target.comment.value;
//     displayComment({ content: newPostedComment });
//     event.target.reset();
// }
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
