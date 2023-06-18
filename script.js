start = Date.now()
indicator = document.getElementById("indicator")

function update() {
    var diff = (Date.now() - start)/1000
    var h = Math.floor(diff/3600)
    var m = Math.floor((diff-3600*h)/60)
    var s = Math.floor(diff-3600*h-60*m)
    h = ("00"+h).slice(-2)
    m = ("00"+m).slice(-2)
    s = ("00"+s).slice(-2)
    indicator.innerText = `${h}:${m}:${s}`
}

function reset() {
    start = Date.now()
    update()
}

setInterval(update, 1000)