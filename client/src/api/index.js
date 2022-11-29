import axios from 'axios';

export const url = 'https://bebop-clone.herokuapp.com:8080';

export default axios.create({
  baseURL: `${url}/api/v1`,
  // withCredentials: true,
  // headers: {
  //   'Content-Type': 'application/json',
  //   Authorization: 'Bearer ' + localStorage.getItem('token'),
  // },
});
