let progress = 0;
let lon = false;
let lsoff = "Img/loff.png";
let lson = "Img/lon.png";

function pbpo() {
    if (progress < 100) {
        progress = progress + 1;
        document.getElementById('pr').value = progress;
    }
}

function cpb() {
    progress = 0
    document.getElementById('pr').value = progress;
}

function sk() {
    if (lon == false) {
        document.getElementById('lamp').src = lson;
        lon = true;
    } else {
        document.getElementById('lamp').src = lsoff;
        lon = false;
    }
}