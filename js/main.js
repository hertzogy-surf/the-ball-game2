var gCurrBallSizes = [100, 100]
var gCurrBallColors = ['yellow', 'blue']
var gCurrPageColor = 'black'


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

function onChangePageColor() {

    gCurrPageColor = getRandomColor()
    document.querySelector('body').style.backgroundColor = gCurrPageColor
}

