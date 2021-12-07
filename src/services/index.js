const isProd = false;
// const urlDev = "http://127.0.0.1:8000/store";
const urlDev = "http://178.128.99.51:81/store";
const urlStorage = "http://178.128.99.51:81/storage/"
// const urlStorage = "http://127.0.0.1:8000/storage/"
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
        },
        signal: abortCont.signal,
        })
        .then((result) => result.json())
        .then((result) => {
                resolve(result);
              }, (err) => {
                reject(err);
        });
	    }, 1000);

		return () => abortCont.abort();
    });

  return promise;
};

const post = (path, param) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${root}/${path}`, {
        method: "POST",
        headers: {
          "Accept": "/",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE",
          "Access-Control-Allow-Headers": "origin,X-Requested-With,content-type,accept",
        },
        body: param,
      })
        .then((result) => result.json())
        .then((result) => {
                resolve(result);
              },(err) => {
                reject(err);
        });
      }, 1000);
    });

  return promise;
};

const API = {
  root,
  urlStorage,
  get,
  post,
};

export default API;