import Player, { isMobile } from "@oplayer/core"
import ui from "@oplayer/ui"

import Hls from "@oplayer/hls"



const playHLS = (hlsUrl, thumbnail) => {

    Player.make('video-player', {
        source: {
          src: hlsUrl,
          poster: thumbnail
        }
      })
        .use([ui({
            screenshot: true,
            pictureInPicture: true
        })])
        .use([Hls({
            qualityControl: true,
            qualitySwitch: "smooth",
            forceHLS: true
            
        })])
        .create()
} 

export default playHLS

