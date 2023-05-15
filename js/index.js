
var indexValue = 1;
showImg(indexValue);

function side_slide(i) {
    showImg(indexValue += i);
}

function showImg(i) {
    var j;
    const img = document.querySelectorAll('img');
    if (i > img.length) {
        indexValue = 1
    }

    if (i < 1) {
        indexValue = img.length
    }

    for(j = 0; j < img.length; j++) {
        img[j].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
}
