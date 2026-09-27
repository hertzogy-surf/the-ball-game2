var gCurrBallSizes = [100, 100]
var gCurrBallColors = ['yellow', 'blue']


function onBallClick(elDiv, maxDiameter) {

    var currBallIdx = +elDiv.id

    //update model
    gCurrBallSizes[currBallIdx] += getRandomInt(20, 60)
    if (gCurrBallSizes[currBallIdx] > maxDiameter) gCurrBallSizes[currBallIdx] = 100

    gCurrBallColors[currBallIdx] = getRandomColor()

    //update dom
    updateSizeStyle(elDiv, currBallIdx)
    updateColorStyle(elDiv, currBallIdx)
    updateInnerText(elDiv, currBallIdx)
}

function swapBalls() {

    //updating the model
    swapSizes()
    swapColors()

    //updating the dom
    for (var i = 0; i < 2; i++) {
        var elBall = document.querySelector(`.ball${i}`)
        updateSizeStyle(elBall, i)
        updateColorStyle(elBall, i)
        updateInnerText(elBall, i)
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
        updateSizeStyle(elBall, i)
        updateInnerText(elBall, i)
    }
}

function swapSizes() {
    var tmpSize = gCurrBallSizes[0]
    gCurrBallSizes[0] = gCurrBallSizes[1]
    gCurrBallSizes[1] = tmpSize
}

function swapColors() {
    var tmpColor = gCurrBallColors[0]
    gCurrBallColors[0] = gCurrBallColors[1]
    gCurrBallColors[1] = tmpColor
}

function updateInnerText(elBall, ballIdx) {
    elBall.innerText = gCurrBallSizes[ballIdx]
}

function updateSizeStyle(elBall, ballIdx) {
    elBall.style.width = elBall.style.height = gCurrBallSizes[ballIdx] + 'px'
}

function updateColorStyle(elBall, ballIdx) {
    elBall.style.backgroundColor = gCurrBallColors[ballIdx]
}

