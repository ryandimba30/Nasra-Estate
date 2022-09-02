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
function getAllTrains(){const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '25abe8c41cmsh2c11a550467a1f1p19fa9ejsn3cca9fa6752c',
		'X-RapidAPI-Host': 'Estates.p.rapidapi.com'
	},
	body: '{"search":"Estate"}'
};

fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
};
