import getStream from "../apis/Stream"
import playHLS from "../player/PlayHLS"
import setDetail from "../player/setDetail"
import removeElement from "../util/removeElement"
import resetContainer from "../util/resetContainer"
import setMetadata from "./Metadata"
import updateVideoList from "./updateVideoList"



const onVideoItemClicked = (videoId) => {

    
    getStream(videoId).then((streamData) => {
        const { hls,
            thumbnailUrl,
            title,
            description,
            uploaderAvatar,
            uploader,
            views,
            uploaderSubscriberCount,
            relatedStreams
        } = streamData.data

        const { url } = relatedStreams[0]

        const playNextRelation = () => {
            onVideoItemClicked(String(url).substring(9))
        }

        resetContainer('video-player')
        removeElement('video-detail')
        // HLS?
        playHLS(hls, thumbnailUrl, playNextRelation)
        setDetail(
            title,
            description,
            uploaderAvatar,
            uploader,
            views,
            uploaderSubscriberCount
        )
        setMetadata({
            title: title,
            artist: uploader,
            album: "General",
            artwork: [{
                src: String(thumbnailUrl),
                type: "image/jpg"

            }]
        })

        updateVideoList(relatedStreams)

        window.scrollTo({ top: 0, behavior: "smooth" })
    })


}

export default onVideoItemClicked