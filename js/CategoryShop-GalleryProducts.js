function changePic(newPic) {
    document.querySelector('#picBox img').src = newPic;
}

function showPics(cls) {
    myPics = document.querySelectorAll(cls);
    for (let i = 0; i < myPics.length; i++) {
        myPics[i].style.display = 'inline-block';
    }
}

function hidePics() {
    myPics = document.querySelectorAll('#pics li');
    for (let i = 0; i < myPics.length; i++) {
        myPics[i].style.display = 'none';
    }
}

document.querySelector('#btn1').addEventListener('click', function() {
    hidePics();
    showPics('.allPic')
});
document.querySelector('#btn2').addEventListener('click', function() {
    hidePics();
    showPics('.iphone')
});
document.querySelector('#btn3').addEventListener('click', function() {
    hidePics();
    showPics('.samsung')
});
document.querySelector('#btn4').addEventListener('click', function() {
    hidePics();
    showPics('.xiaomi')
});

imgs = document.querySelectorAll('#pics img');
for (let i = 0; i < imgs.length; i++) {
    let n;
    (i >= 9) ? n = (i + 1): n = '0' + (i + 1);
    imgs[i].addEventListener('click', function() {
        document.querySelector('#picBox img').setAttribute('src', this.src);
        document.querySelector('#picInfo').innerHTML = this.getAttribute('data-desc') + "<br>$ " + this.getAttribute('data-prc');
    });
}