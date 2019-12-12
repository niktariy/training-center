import axios from 'axios';

const cors_api_host = 'cors-anywhere.herokuapp.com';
const cors_api_url = 'https://' + cors_api_host + '/';
const ngrok_server_number = '952bf094';

const headers = {
  'Content-Type': 'application/json',
  // 'Content-Type': 'x-www-form-urlencoded',
};

export const API_URL =
  cors_api_url + 'http://' + ngrok_server_number + '.ngrok.io';

export default axios.create({
  baseURL: API_URL,
  headers,
});

const authHeader = sessionStorage.getItem('authToken');

export const SECURE_API = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: authHeader,
  },
});
