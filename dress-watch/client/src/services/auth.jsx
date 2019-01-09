import axios from 'axios';
const URL_AUTH = 'http://localhost:3001/user_token'
const URL_Users = 'http://localhost:3001/users'

export const login = async (credentials) => {
  const resp = await axios({
    method: 'post',
    url: URL_AUTH,
    data: {auth: credentials},
  });
  const tokenData = resp.data
  return tokenData
}

export const create = async (register) => {
  const resp = await axios({
    method: 'post',
    url: URL_Users,
    data: {user: register},
  });
  const userData = resp.data
  return userData
}

export const getSelf = async (token) => {
  const resp = await axios({
    method: 'get',
    url: `${URL_Users}/mine`,
    headers: {
   Authorization: `Bearer ${token}`,
 },
  });
  const userData = resp.data
  return userData
}
