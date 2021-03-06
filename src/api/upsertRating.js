import axios from "axios";

export default async function upsertRating(opinion, jokeGUID, token) {

    const { data } = await axios.post(`/api/rating`, { opinion, jokeGUID, token });
    return data;
}