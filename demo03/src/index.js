import fetch from 'node-fetch';

const getData = (url = 'https://github.com') => {
  return fetch(url).then(res => {
    // console.log(res.ok);
    // console.log(res.status);
    // console.log(res.statusText);
    // console.log(res.headers.raw());
    // console.log(res.headers.get('content-type'));
    return res.status;
  });
}

export {
  getData
}