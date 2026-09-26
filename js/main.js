var gCurrBallSize = 100

function onBallClick(elDiv) {

    gCurrBallSize += 50
    if (gCurrBallSize > 400) gCurrBallSize = 100
    
    elDiv.style.width = elDiv.style.height = gCurrBallSize + 'px'
    elDiv.innerText = gCurrBallSize
}