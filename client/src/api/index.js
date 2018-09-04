import axios from 'axios/index';

export const api = {
  post: (url, data) => axios.post(url, data).then(resp => resp.data).catch(err => {
    throw err.response.data;
  }),
  get: url => {
    console.log(axios.defaults.headers.common.ab)
    return axios.get(url).then(resp => {
      console.log('here...');
      return resp.data;
    }).catch(err => {
      console.log(err.response);
      throw err.response.data;
    });
  }
};
