function Changepic(newpic) {
    picbox.querySelector("#picbox img").src = newpic;
}

function showPics(cls) {
    myPics = document.querySelectorAll(cls);
    for (let i = 0; i < myPics.length; i++) {
        myPics[i].style.display = 'inline-block';
    }
}

function hidePics() {
    myPics = document.querySelectorAll('#allgallery li');
    for (let i = 0; i < myPics.length; i++) {
        myPics[i].style.display = 'none';
    }
}


document.querySelector("#btn1").addEventListener("click", function() {
    hidepics();
    showpics(".nature")
});
document.querySelector("#btn2").addEventListener("click", function() {
    hidepics();
    showpics(".sabika")
});
document.querySelector("#btn3").addEventListener("click", function() {
    hidepics();
    showpics(".all")
});


imgs = document.querySelectorAll('#allgallery img');
for (let i = 0; i < imgs.length; i++) {
    let n;
    (i >= 9) ? n = (i + 1): n = '0' + (i + 1);
    // if (i >= 9) {
    //     n = (i + 1);
    // } else { n = '0' + (i + 1); }
    imgs[i].addEventListener('click', function() {
        // document.querySelector('#picBox img') = document.querySelectorAll("li img")[i].src;
        document.querySelector('#picBox img').setAttribute('src', this.src);
        document.querySelector('#picInfo').innerHTML = this.getAttribute('data-desc') + "<br>$ " + this.getAttribute('data-prc');
    });
}