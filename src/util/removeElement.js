/**
 * 
 * @param {HTMLElement} element 
 */

const removeElement = (el) => {
    const element = document.querySelector(el)
    if (element) element.remove()
}

export default removeElement