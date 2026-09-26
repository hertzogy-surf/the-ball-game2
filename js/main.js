var gCurrBallSize = 100

function onBallClick(elDiv) {

    gCurrBallSize += getRandomInt(20, 60)


    if (gCurrBallSize > 400) gCurrBallSize = 100
    
    elDiv.style.width = elDiv.style.height = gCurrBallSize + 'px'
    elDiv.style.backgroundColor = getRandomColor()
    elDiv.innerText = gCurrBallSize

}