import getTrending from "../apis/Trending"

const main = () => {
    console.log('DOMContentLoaded')

    const mainElement = document.getElementById('main')

    const videoList = document.createElement('video-list')
    mainElement.appendChild(videoList)
    
    getTrending().then((data) => videoList.videos = data.data).then(() => {
        document.querySelectorAll('video-item').forEach((el) => {
            el.addEventListener('click', (e) => {
                console.log(e)
            })
        })
    })



    
    

}

export default main