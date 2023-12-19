import searchVideo from "../apis/Search"
import removeElement from "../util/removeElement"

const onSearch = (query) => {
    searchVideo(query).then((data) => {

        removeElement('video-list')
        const videoListNew = document.createElement('video-list')
        // console.log(data.data.items)
        videoListNew.videos = data.data.items

        document.getElementById('main').append(videoListNew)
        document.querySelector('video-list').scrollIntoView()
        // handle

    }).catch((err) => console.error(err))
}

export default onSearch