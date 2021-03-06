import axios from "axios";

export default async function getUserInfo(token) {

    const { data } = await axios.get(`/api/user/${token}`);
    return data;
};