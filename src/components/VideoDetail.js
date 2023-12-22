class VideoDetail extends HTMLElement {
    constructor() {
        super()
    }

    /**
     * @param {string} vTitle
     */
    set vTitle (vTitle)  {
        this._vTitle = vTitle
    }

    /**
     * @param {string} uploaderAvatar
     */
    set uploaderAvatar(uploaderAvatar) {
        this._uploaderAvatar = uploaderAvatar
    }
    
    /**
     * @param {string} uploaderName
     */
    set uploaderName(uploaderName) {
        this._uploaderName = uploaderName
    }

    /**
     * @param {string} description
     */
    set description(description) {
        this._description = description
    }

    set views(views) {
        this._views = views
    }

    set subs(subs) {
        this._subs = subs
    }

    render() {
        this.innerHTML = `
        
        <section>
            <div class="relative">
                <input type="checkbox" name="gataulagi" class="peer hidden" id="gataulagi">
                <label class="pl-4 pt-4  block " for="gataulagi">
                    <h2 class="text-xl font-bold">${this._vTitle}</h2>
                    <div class="text-gray-600 text-sm"><span>${this._views}</span> kali ditonton</div>
                </label>
                <div class="flex items-center pl-3 py-3">
                    <img class="h-10 w-10 rounded-full"
                        src="${this._uploaderAvatar}"
                        alt="">
                    <div class="flex flex-col">
                        <p class="ml-2 text-md">${this._uploaderName}</p>
                        <p class="ml-2 text-sm text-gray-600">${this._subs} subscriber</p>
                    </div>
                </div>
                <span class="absolute top-4 right-4 transition-all peer-checked:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" class="scale-125" height="16" width="10"
                        viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                        <path
                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                    </svg>
                </span>
                <div
                    class="rounded-b-2xl shadow-md  pl-3 h-0 w-full overflow-hidden transition-all peer-checked:h-full">
                    <div class="mb-4 text-gray-800">
                        ${this._description}
                    </div>
                </div>

            </div>
        </section>
        
        `
    }

    connectedCallback() {

    }
}

customElements.define('video-detail', VideoDetail)