import axios from 'axios';

const cors_api_host = 'cors-anywhere.herokuapp.com';
const cors_api_url = 'https://' + cors_api_host + '/';
const ngrok_server_number = '43eb90e0';

export const ENDPOINT =
  cors_api_url + 'http://' + ngrok_server_number + '.ngrok.io';

const headers = () => {
  const h = new Headers();

  h.append('Content-Type', 'application/json');

  const session = {
    authToken: localStorage.getItem('authToken'),
  };

  if (session.authToken) {
    h.append('Authorization', session.authToken);
  }

  return h;
};

export default axios.create({
  baseURL: ENDPOINT,
  headers: headers(),
});
