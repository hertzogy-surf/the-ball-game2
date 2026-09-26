var gCurrBallSize = 100

function onBallClick(elDiv) {

    gCurrBallSize += 50
    elDiv.style.width = elDiv.style.height = gCurrBallSize + 'px'
    elDiv.innerText = gCurrBallSize
}