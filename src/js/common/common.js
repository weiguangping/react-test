window.onload = function () {
  var html = document.getElementById('html')
  var owidth = document.body.clientWidth || document.documentElement.clientWidth
  html.style.fontSize = owidth / 750 * 100 + 'px'
  // style.fontSize = 50 * (clientWidth / 375) + 'px'
}
window.onresize = function () {
  var html = document.getElementById('html')
  var owidth = document.body.clientWidth || document.documentElement.clientWidth
  html.style.fontSize = owidth / 750 * 100 + 'px'
}
