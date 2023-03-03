window.addEventListener("DOMContentLoaded",function(){
//Components Creating
let header = document.createElement("header")
let main = document.createElement("main")
let footer = document.createElementNS("footer")
let tg = document.createElement("div")
let sum = document.createElement("div")
let sec = document.createElement("section")

//Component settings
sec.innerHTML = "<span>Section Text</span><i class=\'fa fa-close fa-lg\'></i>"
tg.setAttribute("id","targ")
sum.setAttribute("id","total")
sum.innerText = "0"
sum.classList.add("sum")
tg.appendChild(sum)
tg.innerHTML +="<h2>New Text in this DIV</h2>"
main.style.position = "relative"
main.style.minHeight = "65vh"
tg.setAttribute("style","padding-bottom:50px; position:absolute; right:10px; bottom:10px")

//Components Adding
tg.append(sum)
tg.innerHTML +="<h2>New Text in this DIV</h2>"
tg.append(sec)
tg.append(sec.cloneNode(true))
main.append(tg)
document.body.append(header)
document.body.append(main)
document.body.append(footer)


});