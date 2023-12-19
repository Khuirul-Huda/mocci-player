class VideoList extends HTMLElement {

    constructor() {
        super()
    }

    /**
     * @param {array} videos
     */
    set videos(videos) {
        this._videos = videos
        this.classList = "sm:flex sm:flex-wrap sm:justify-around"
        this.render() //auto render because only need this data
    }

    render() {
        // console.log(this._videos)
        this._videos.forEach((video) => {
          
            const videoElement = document.createElement('video-item')
            videoElement.thumbnail = video.thumbnail
            videoElement.title = video.title
            videoElement.uploaderName = video.uploaderName
            videoElement.uploaderAvatar = video.uploaderAvatar
            videoElement.idVideo = String(video.url).substring(9)
            videoElement.render()

            this.appendChild(videoElement)
            
        })
    }
}

customElements.define('video-list', VideoList)