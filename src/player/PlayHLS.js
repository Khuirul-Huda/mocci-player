import Player, { isMobile } from "@oplayer/core"
import ui from "@oplayer/ui"

import Hls from "@oplayer/hls"



const playHLS = (hlsUrl) => {

    Player.make('video-player', {
        source: {
          src: hlsUrl,
          poster: 'https://oplayer.vercel.app/poster.png'
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

