import './style.css'

import './components/NavBar.js'
import './components/VideoPlayer.js'
import './components/VideoItem.js'
import './components/VideoList.js'
import './components/VideoDetail.js'
import './components/VideoMore.js'

/** 
 * yey selesai
 */

// import main from './scripts/main.js'
import state from './handlers/State.js'


// document.addEventListener('DOMContentLoaded', main)
document.addEventListener('DOMContentLoaded', state.registerListener)
