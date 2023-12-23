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
            // include stream only hehe
            if (video.type != 'stream') return

            const {
                thumbnail,
                title,
                uploaderName,
                uploaderAvatar,
                url,
                duration
            } = video

            const videoElement = document.createElement('video-item')
            videoElement.thumbnail = thumbnail
            videoElement.title = title
            videoElement.uploaderName = uploaderName
            videoElement.uploaderAvatar = uploaderAvatar
            videoElement.idVideo = String(url).substring(9)
            videoElement.duration = `${Math.floor(duration/60)}:${duration % 60}`
            videoElement.render()

            this.appendChild(videoElement)
            
        })
    }
}

customElements.define('video-list', VideoList)