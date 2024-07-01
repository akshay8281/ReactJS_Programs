let backEndServer = "http://localhost:8000/movies/";

const callAPI = ({ method, requestBody, callBackFunction, movieId }) => {
    let url = backEndServer;
    if (movieId) {
        url += movieId;
    }

    const options = {
        method: method,
    };

    if (method === "POST" || method === "PUT") {
        options.body = JSON.stringify(requestBody);
    }

    fetch(url, options)
        .then(rawData => rawData.json())
        .then(json => callBackFunction(json))
        .catch(() => callBackFunction(false));
};

export { callAPI };
