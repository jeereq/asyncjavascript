const request = new XMLHttpRequest();

const getWorks = (ressource) => {
	return new Promise((resolve, reject) => {
		request.addEventListener("readystatechange", () => {
			try {
				if (request.readyState === 4 && request.status === 404)
					throw {
						status: request.status,
						statusText: request.statusText,
						content: null
					};
				if (request.readyState === 4 && request.status === 200) {
					const obj = {};
					obj.status = 200;
					obj.statusText = request.statusText;
					obj.content = JSON.parse(request.responseText);
					resolve(obj);
				}
			} catch (error) {
				reject(error);
			}
		});

		request.open("get", ressource);
		request.send();
	});
};
getWorks("data.json")
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});
const getSomething = () => {
	return new Promise((resolve, reject) => {
		//	resolve("hello guys ");
		reject("error ");
	});
};

getSomething()
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});
