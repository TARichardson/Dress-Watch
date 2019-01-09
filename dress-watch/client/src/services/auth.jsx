import axios from 'axios';

export const login = async (credentials) => {
  const URL_AUTH = 'http://localhost:3001/user_token'
  const resp = await axios.post(URL_AUTH,
    {
   'auth': credentials,
    });
    
  return resp.data
}
