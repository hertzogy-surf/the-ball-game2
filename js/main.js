var gCurrBallSizes = [100, 100]


function onBallClick(elDiv, maxDiameter) {
console.log(maxDiameter)
    
    var currBallIdx = +elDiv.id
    console.log(currBallIdx)
    var currBallSize = gCurrBallSizes[currBallIdx]
    console.log(currBallSize)
    
    currBallSize += getRandomInt(20, 60)
console.log('size after adding', currBallSize)

    if (currBallSize > maxDiameter) currBallSize = 100
        
    elDiv.style.width = elDiv.style.height = currBallSize + 'px'
    elDiv.style.backgroundColor = getRandomColor()
    elDiv.innerText = currBallSize

    gCurrBallSizes[currBallIdx] = currBallSize
}