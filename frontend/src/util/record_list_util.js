import axios from 'axios';

export const getRecordList = () =>{
  return axios.get('/record')
}
