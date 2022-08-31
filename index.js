const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '25abe8c41cmsh2c11a550467a1f1p19fa9ejsn3cca9fa6752c',
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
};

fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));