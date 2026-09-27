function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
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



