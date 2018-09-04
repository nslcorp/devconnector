import axios from 'axios/index';

export const setAuthToken = token => {
  localStorage.setItem('jwtToken', token);
  axios.defaults.headers.common['Authorization'] = token;
};

export const removeAuthToken = () => {
  localStorage.removeItem('jwtToken');
  delete axios.defaults.headers.common['Authorization'];
};
