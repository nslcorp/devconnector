import axios from 'axios/index';

export const setAuthToken = token => {
  localStorage.setItem('authToken', token);
  axios.defaults.headers.common['Authorization'] = token;
};

export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
  delete axios.defaults.headers.common['Authorization'];
};
