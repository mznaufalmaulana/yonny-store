const isProd = false;
// const urlDev = "http://127.0.0.1:8000/store";
const urlDev = "http://178.128.99.51:81/store";
const urlProd = "http://*";
const root = isProd ? urlProd : urlDev;

const get = (path) => {
	const promise = new Promise((resolve, reject) => {
		const abortCont = new AbortController();
    setTimeout(() => {
      fetch(`${root}/${path}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // Authorization: localStorage.getItem("token"),
        },
				signal: abortCont.signal,
      })
        .then((result) => result.json())
        .then(
          (result) => {
            resolve(result);
          },
          (err) => {
            reject(err);
          }
        );
    }, 1000);

		return () => abortCont.abort();
		
  });

  return promise;
};

const API = {
  root,
  get,
};

export default API;