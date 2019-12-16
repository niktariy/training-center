import axios from 'axios';

const cors_api_host = 'cors-anywhere.herokuapp.com';
const cors_api_url = 'https://' + cors_api_host + '/';
const ngrok_server_number = '43eb90e0';

export const ENDPOINT =
  cors_api_url + 'http://' + ngrok_server_number + '.ngrok.io';

const headers = () => {
  const h = new Headers();

  h.append('Content-Type', 'application/json');
  debugger;

  const session = {
    authToken: localStorage.getItem('authToken'),
  };

  if (session.authToken) {
    h.append('Authorization', session.authToken);
  }

  return h;
};

const request = (method, path, data) => {
  const url = `${ENDPOINT}/${path}`;
  const options = { method: method, headers: headers() };
  debugger;
  if (data) {
    options.data = data;
  }

  return axios.create({ url, options });
};

const Api = {
  get(path) {
    return request('get', path);
  },
  post(path, data) {
    return request('post', path, data);
  },
  put(path, data) {
    return request('put', path, data);
  },
  delete(path) {
    return request('delete', path);
  },
};

export default Api;
