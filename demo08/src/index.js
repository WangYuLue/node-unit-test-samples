import fetch from 'node-fetch';

const sum = (a, b) => {
  return a + b;
}

const getData = (url = 'https://github.com') => {
  return fetch(url).then(res => {
    return res.status;
  });
}

export {
  sum,
  getData
}