import getStream from "../apis/Stream"
import playHLS from "../player/PlayHLS"
import setDetail from "../player/setDetail"
import removeElement from "../util/removeElement"
import resetContainer from "../util/resetContainer"

const onVideoItemClicked = (videoId) => {
    

    getStream(videoId).then((streamData) => {
        resetContainer('video-player')
        removeElement('video-detail')
        // HLS?
        playHLS(streamData.data.hls)
        setDetail(streamData.data.title, streamData.data.description, streamData.data.uploaderAvatar, streamData.data.uploader, streamData.data.views)

        window.scrollTo({top: 0, behavior:"smooth"})
    })
    

}

export default onVideoItemClicked