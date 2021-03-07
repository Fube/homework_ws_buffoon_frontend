import axios from "axios";

export default function signup(user) {

    return axios.post(`/api/user/signup`, user);
}