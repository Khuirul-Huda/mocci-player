import searchVideo from "../apis/Search"
import removeElement from "../util/removeElement"
import updateVideoList from "./updateVideoList"

const onSearch = (query) => {
    searchVideo(query).then((data) => {
        const { items: videoItems } = data.data

        removeElement('video-list')
        updateVideoList(videoItems, true)
        

    }).catch((err) => console.error(err))
}

export default onSearch