import axios from 'axios';

const url = "http://localhost:3001/";
export default function API(route, method, data) {
    return axios({
        method: method,
        url: `${url}${route}`,
        data: data,
    }).catch((err) => {
        console.log(err);
    })
}