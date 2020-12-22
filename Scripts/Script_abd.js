var arr = ['g1.jpg', 'g3.jpg', 'g4.jpg'],
    block = document.querySelector('.block'),
    i = 0;
block.onclick = boom;

function boom() {
    block.style.backgroundImage = 'url(Img/' + arr[i] + ')';
    i++;

    if (i == arr.length) {
        i = 0;
    }
}