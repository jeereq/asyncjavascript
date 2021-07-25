const request = new XMLHttpRequest();

const getWorks = (ressource, callback) => {
	request.addEventListener("readystatechange", () => {
		try {
			if (request.readyState === 4 && request.status === 404)
				throw {
					status: request.status,
					statusText: request.statusText,
					data: null
				};
			if (request.readyState === 4 && request.status === 200) {
				const obj = {};
				obj.status = 200;
				obj.statusText = request.statusText;
				obj.data = JSON.parse(request.responseText);
				callback(null, obj);
			}
		} catch (error) {
			callback(error, null);
		}
	});

	request.open("get", ressource);
	request.send();
};
getWorks("data.jsons", (error, data) => {
	if (error) console.log(error);
	else console.log(data);
});
const getSomething = () => {
	return new Promise((resolve, reject) => {
		//	resolve("hello guys ");
		reject("error ");
	});
};

getSomething().then(
	(data) => {
		console.log(data);
	},
	(error) => {
		console.log(error);
	}
);
