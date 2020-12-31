import fetch from 'node-fetch';

const getData = (url = 'https://github.com') => {
  return fetch(url).then(res => {
    return res.status;
  });
}

export {
  getData
}