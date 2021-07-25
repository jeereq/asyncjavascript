const request = new XMLHttpRequest();

const getWorks = (callback) => {
	request.addEventListener("readystatechange", () => {
		try {
			if (request.readyState === 4 && request.status === 404)
				throw {
					status: request.status,
					statusText: request.statusText
				};
			if (request.readyState === 4 && request.status === 200)
				callback(null, request);
		} catch (error) {
			callback(error, null);
		}
	});

	request.open("get", "http://localhost:4000/works");
	request.send();
};
getWorks((error, data) => {
	if (error) console.log(error);
	else console.log(data);
});
 