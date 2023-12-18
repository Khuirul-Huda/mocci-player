class VideoItem extends HTMLElement {
    constructor() {
        super()
    }

    /**
     * @param {string} url url thumbnail
     */
    set thumbnail(url) {
        this._thumbnail = url
    }

    /**
     * @param {string} title judul video
     */
    set title(title) {
        this._title = title
    }

    /**
     * @param {string} name nama uploader
     */
    set uploaderName(name) {
        this._uploaderName = name
    }

    /**
     * @param {string} url
     */
    set uploaderAvatar(url) {
        this._uploaderAvatar = url
    }

    /**
     * @param {string} idVideo
     */
    set idVideo(idVideo) {
        this._idVideo = idVideo
        this.id = idVideo
        
    }

    updateId() {
        this.id = this._id
    }

    render() {
        this.innerHTML = `
        
        <div class="m-3 p-2 shadow  rounded-lg w-80 cursor-pointer transition-all hover:shadow-md" >
                    <img class="rounded-lg"
                        src="${this._thumbnail}"
                        alt="" loading="lazy" >
                    <div class="flex mt-1 items-center">
                        <img class="h-14 w-14 rounded-full"
                            src="${this._uploaderAvatar}"
                            alt="">
                        <div class="ml-1">
                            <p class="">${this._title}</p>
                            <p class="text-sm text-gray-500">${this._uploaderName}</p>

                        </div>
                    </div>
                </div>
        
        `
    }

    connectedCallback() {
        // console.log('Vid')
    }
}
customElements.define('video-item', VideoItem)
