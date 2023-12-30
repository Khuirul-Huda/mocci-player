import onSearch from "../handlers/SearchHandler"

class NavBar extends HTMLElement {
    constructor() {
        super()

    }

    connectedCallback() {
        this.innerHTML = `
        
        <nav class="border-b border-slate-300 p-4 flex flex-row justify-between">
        <div class="rpx-3 py-1  text-slate-700 text-xl cursor-pointer font-bold">
                Mocci<span class="text-red-400">Player</span></div>
        <div class="relative"><input id="searchQuery" class="p-1 w-32 ml-1 rounded-lg shadow-lg" type="text"
                placeholder="Cari..."> <span id="searchButton" class="absolute cursor-pointer right-2 top-2  rounded-full"><svg
                    xmlns="http://www.w3.org/2000/svg" height="20" width="20"
                    viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                    <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg></span></div>
    </nav>

        `
        document.getElementById('searchButton').addEventListener('click', (e) => onSearch(document.getElementById('searchQuery').value))
        document.getElementById('searchQuery').addEventListener('keypress', (e) => { if (e.key == "Enter") {
            onSearch(document.getElementById('searchQuery').value)
        } })

    }

}

customElements.define('nav-bar', NavBar)