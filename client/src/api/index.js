import axios from 'axios/index';

export const api = {
  post: (url, data) => axios.post(url, data).then(resp => resp.data).catch(err => {
    throw err.response.data;
  }),
  get: url => axios.get(url).then(resp => resp.data).catch(err => {
    console.log(err.response);
    throw err.response.data;
  })
};
