// Create function to check time
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// Create function to check today's date
function checkToday() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(checkToday, 500);
}

// Call function to check today's date
checkToday();
