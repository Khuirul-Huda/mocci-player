import axios from "axios"
import APIConfig from "./Config"

const searchVideo = (query) => {
    const res = axios.get(APIConfig.baseURL + '/search', {
        params: {
            q: query,
            filter: 'all'
        }
    })
    window.history.pushState({}, `Search: ${query}`, `/search?q=${query}`)

    return res
}

export default searchVideo