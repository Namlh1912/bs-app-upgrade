import axios from 'axios';
import {baseUrl} from '../baseUrl';
import qs from 'query-string';

export default function loginServices(username, password){
  return axios ({
    method: 'POST',
    url: `${baseUrl}/api/login`,
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify({
      username,
      password
    })
  })
}



