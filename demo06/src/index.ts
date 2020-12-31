import fetch from 'node-fetch';

const getData = (url: string = 'https://github.com'): Promise<number> => {
  return fetch(url).then(res => {
    return res.status;
  });
}

export {
  getData
}