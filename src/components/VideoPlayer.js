class VideoPlayer extends HTMLElement {

    constructor() {
        super()
    }
    // hmm
    connectedCallback() {
        this.id = 'player'
    }
}

customElements.define('video-player', VideoPlayer)