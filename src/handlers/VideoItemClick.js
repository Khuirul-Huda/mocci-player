import getStream from "../apis/Stream"
import playHLS from "../player/PlayHLS"
import resetPlayerContainer from "../util/resetPlayerContainer"

const onVideoItemClicked = (videoId) => {
    

    getStream(videoId).then((streamData) => {
        resetPlayerContainer()
        // HLS?
        playHLS(streamData.data.hls)
        window.scrollTo({top: 0, behavior:"smooth"})
    })
    

}

export default onVideoItemClicked