import axios from 'axios';

const CORS_ALLOW_URL = 'https://cors-anywhere.herokuapp.com/';

const headers = {
  'Content-Type': 'application/json',
  // 'Content-Type': 'x-www-form-urlencoded',
};

export const API_URL = `${CORS_ALLOW_URL}http://318e333d.ngrok.io`;

export default axios.create({
  baseURL: API_URL,
  headers,
});

const authHeader = sessionStorage.getItem('authToken');

export const SECURE_API = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: authHeader,
  },
});
