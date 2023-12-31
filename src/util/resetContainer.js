const resetContainer = (querySelector) => {
    const element = document.querySelector(querySelector)
    if (element) element.innerHTML = ''
}

export default resetContainer