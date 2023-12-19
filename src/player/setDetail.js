
const setDetail = (title, description, uploaderAvatar, uploaderName, views) => {
    
    const videoDetailElement = document.createElement('video-detail')
    videoDetailElement.vTitle = title
    videoDetailElement.uploaderName = uploaderName
    videoDetailElement.uploaderAvatar = uploaderAvatar
    videoDetailElement.description = description
    videoDetailElement.views = views
    videoDetailElement.render()
    document.querySelector('video-more').append(videoDetailElement)
    

}

export default setDetail