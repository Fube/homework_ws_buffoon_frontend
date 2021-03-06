import axios from "axios";

const {
    BACKED,
} = process.env;

export default async function signin(user) {

    const { data } = await axios.post(`/api/user/login`, user);
    return data;
}