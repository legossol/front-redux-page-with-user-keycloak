import axios from 'axios'
const headers = {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': '*/*',
    // 'Access-Control-Allow-Origin':'*'
}
const getUsers = (page) =>{
    return axios.get(`http://localhost:8080/users/list?page=${page}`)
}
const requestDefaultToken = (payload) =>{
    return axios.post(`http://localhost:9088/realms/myService/protocol/openid-connect/token`, JSON.stringify(payload), {headers}).then(res =>{console.log('sended Ok',res.data)})
}
export default {getUsers, requestDefaultToken};