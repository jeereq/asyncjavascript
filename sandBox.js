const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
	if (request.readyState === 4)
		console.log(request.responseText, request.readyState);
});

request.open("get", "https://jsonplaceholder.typicode.com/todos/");
request.send();
