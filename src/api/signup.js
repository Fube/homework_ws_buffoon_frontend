import axios from "axios";

const {
    BACKED,
} = process.env;

export default function signup(user) {

    return axios.post(`${BACKED}/api/user/signup`,user);
}