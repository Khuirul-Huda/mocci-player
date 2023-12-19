import axios from "axios";
import APIConfig from "./Config";

const getStream = (videoId) => {
    const stream = axios.get(`${APIConfig.baseURL}/streams/${videoId}`).catch((err) => console.error(`Stream: ${err}`))

    return stream
}

export default getStream