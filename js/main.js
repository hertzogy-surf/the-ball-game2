var gCurrBallSizes = [100, 100]
var gCurrBallColors = ['yellow','blue']


function onBallClick(elDiv, maxDiameter) {
    
    var currBallIdx = +elDiv.id
    var currBallSize = gCurrBallSizes[currBallIdx]
    
    currBallSize += getRandomInt(20, 60)

    if (currBallSize > maxDiameter) currBallSize = 100
        
    elDiv.style.width = elDiv.style.height = currBallSize + 'px'
    elDiv.style.backgroundColor = getRandomColor()
    elDiv.innerText = currBallSize

    gCurrBallSizes[currBallIdx] = currBallSize
    gCurrBallColors[currBallIdx] = elDiv.style.backgroundColor
    console.log(gCurrBallColors[0])

    console.log(gCurrBallColors[1])
}

function swapBalls() {
    
    //updating the model
    var tmpSize = gCurrBallSizes[0]
    gCurrBallSizes[0] =  gCurrBallSizes[1]
    gCurrBallSizes[1] = tmpSize

    var tmpColor = gCurrBallColors[0]
    gCurrBallColors[0] = gCurrBallColors[1]
    gCurrBallColors[1] = tmpColor

    
    //updating the dom
    for (var i = 0; i < 2; i++) {
        var elBall = document.querySelector(`.ball${i}`)
        elBall.style.width = elBall.style.height = gCurrBallSizes[i] + 'px'
        elBall.style.backgroundColor = gCurrBallColors[i]
        elBall.innerText = gCurrBallSizes[i]
    }

}

function reduceSizes() {
    //updating the model
    for (var i = 0; i < 2; i++) {
        gCurrBallSizes[i] -= getRandomInt(20, 60)
        if (gCurrBallSizes[i] < 100) gCurrBallSizes[i] = 100
    }

    //updating the dom
    for (var i = 0; i < 2; i++) {
        var elBall = document.querySelector(`.ball${i}`)
        elBall.style.width = elBall.style.height = gCurrBallSizes[i] + 'px'
        elBall.innerText = gCurrBallSizes[i]
    }
}

