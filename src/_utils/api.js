import axios from 'axios';

export default axios.create({
  baseURL: `https://reqres.in/api/`,
  // baseURL: `http://9937768c.ngrok.io`,
});
