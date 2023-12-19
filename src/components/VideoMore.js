class VideoMore extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.id = "video-more-information"
    }


}

customElements.define('video-more', VideoMore)