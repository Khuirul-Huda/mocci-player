const setMetadata = (meta) => {
    if ("mediaSession" in navigator) {
        const {title, artist, album, artwork} = meta
        navigator.mediaSession.metadata = new MediaMetadata({
            title: title,
            artist: artist,
            album: album,
            artwork: artwork
        })
    }
}

export default setMetadata