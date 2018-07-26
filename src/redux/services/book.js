import axios from 'axios';
import {baseUrl} from '../baseUrl';

function list(){
  return axios({
    method: 'get',
    url: `${baseUrl}/api/client/book/list?page=1`
  })
}

function detail(id){
  return axios({
    method:'get',
    url: `${baseUrl}/api/client/book/${id}`
  })
}

const bookServices = {
  list,
  detail
};

export default bookServices;