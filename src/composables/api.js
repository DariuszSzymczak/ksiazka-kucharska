import axios from 'axios';

export default function api (url,params,callback) {
    axios.post('http://localhost:8000/api/'+url, params).then((res) => {
        callback(res.data);
        return res.data;
    }).catch(err => { console.log(err);  return null})
}