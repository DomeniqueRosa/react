import axios from "axios";
export default function api() {

    const api = axios.create({
        baseURL : 'https://dummyjson.com'
    });
    return api;
}
