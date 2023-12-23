import Player  from "@oplayer/core"
import ui from "@oplayer/ui"

import Hls from "@oplayer/hls"



const playHLS = (hlsUrl, thumbnail, onEnded = () => {console.debug('Player ended')}) => {

    Player.make('video-player', {
        source: {
          src: hlsUrl,
          poster: thumbnail
        },
        autoplay: true
      })
        .use([ui({
            screenshot: true,
            pictureInPicture: true,
            subtitle: true
        })])
        .use([Hls({
            qualityControl: true,
            qualitySwitch: "smooth",
            forceHLS: true
            
        })])
        .create()
        .on('ended', (e) => onEnded() )
        .on('error', () => (e) => console.error(e))
        
        
        
        
} 

export default playHLS

