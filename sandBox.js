const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
	try {
		if (request.status === 404) throw "erreur";
		if (request.readyState === 4 && request.status === 200)
			console.log(request, request.responseText, request.readyState);
	} catch (error) {
		console.log(error);
	}
});

request.open("get", "http://localhost:4000/works");
request.send();
