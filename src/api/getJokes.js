import axios from "axios";

export default async function getJokes(page=1, limit=10) {

    const { data } = await axios.get(`/api/joke?page=${page}&limit=${limit}`);
    return data;
}