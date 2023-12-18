import APIConfig from "./Config"
import axios from "axios"

const getTrending = (country = 'ID') => {
     const data = axios.get(APIConfig.baseURL + '/trending', {
        params: {
            region: country
        }
    })

    return data
}

export default getTrending