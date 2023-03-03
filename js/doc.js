window.addEventListener("scroll", function() {
    document.querySelector("#targ").innerHTML = window.pageYOffset;
    if (window.pageYOffset > 400) {
        document.querySelector("#b2top").style.right = "30px";
    } else { document.querySelector("#b2top").style.right = "-80px"; }

})

window.addEventListener("scroll", function() {
    document.querySelector("#targ").innerHTML = window.pageYOffset;
    if (window.pageYOffset > 600) {
        document.querySelector("#avd").style.right = "0";
    }
})


document.querySelector("#adv .fa-close").addeventlistener9("click", function() {
    document.querySelector("#adv").style.left = "400px"
})




window.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#btnClose").addEventListener("click", function() { window.close() })
})



document.querySelector("#btnPrint").addEventListener("click", function() { window.print() });


document.querySelector("#btnOpenPage").addEventListener("click", function() {
    window.open("test.html", "winnnn", "fullscreen");
})


window.addEventListener("load ", function() {
    window.open("test.html", "smallwin", "width=750,hight=700,top=100,left=550");
})