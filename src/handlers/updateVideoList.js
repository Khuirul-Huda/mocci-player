import removeElement from "../util/removeElement"

const updateVideoList = (videoList, scroll = false) => {
    removeElement('video-list')
    const videoListNew = document.createElement('video-list')
    videoListNew.videos = videoList
    document.getElementById('main').append(videoListNew)
    if (scroll) document.querySelector('video-list').scrollIntoView({ behavior: "smooth" })
}

export default updateVideoList