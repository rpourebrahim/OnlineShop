window.addEventListener("DOMContentLoaded",function(){
_("#prods").addEventListener("change",function(){

    _('#targ').innerHTML = (this.options[this.selectedIndex].innerText)

    op=" ";
    pprc=this.options[this.selectedIndex].getAttribute("data-price");
    pt=this.options[this.selectedIndex].getAttribute("data-title");
    pdesc=this.options[this.selectedIndex].getAttribute("data-description");
    ppic=this.options[this.selectedIndex].getAttribute("data-pic");

    op +='<div><img src=\"'+ppic+'\"></div>'
    op +='<div>'+pt+'</div>'
    op +='<div>'+pdesc+'</div>'
    op +='<div>$'+pprc+'</div>'
    op += '<button id="btnBuy"> Buy It</button>'
    _("#targ").innerHTML= op;

    })
    
    _('#targ').addEventListener('click',function(e){
        if(e.target.tagName == 'BUTTON'){
            let opc =""
            opc +=`<div><span> ${pdesc}</span>  <span>${pprc}</span> <i class=\'fa fa-close fa-lg\'></i></div>`
            _("#cart").innerHTML +=opc;
            sum = parseInt(_("#total").innerText);
            sum += parseInt(pprc)
            _("#total").innerText = sum;
        }
});

_("#cart").addEventListener("click",function(e){
    if(e.target.tagName == "I"){
        // console.log(e.target.previousElementSibling.innerText)
        cprc= parseInt(e.target.previousElementSibling.innerText)
        sump = parseInt(_("#total").innerText);
        sump -= cprc;
        _("#total").innerText = sump;
        e.target.parentElement.style.display="none"

}
})

});

// window.addEventListener("DOMContentLoaded",function(){
//   document.getElementById("#prods").addEventListener("change",function(){
    
//     document.getElementById('#targ').innerHTML = (this.options[this.selectedIndex].innerText)
    
//         op="";
//         pprc=this.option[this.selectedIndex].getAttribute("data-price");
//         pt=this.option[this.selectedIndex].getAttribute("data-title");
//         pdesc=this.option[this.selectedIndex].getAttribute("data-description");
//         ppic=pt=this.option[this.selectedIndex].getAttribute("data-pic");
    
//         op +='<div><img src=\"'+ppic+'\"></div>'
//         op +='<div>'+pt+'</div>'
//         op +='<div>'+pdesc+'</div>'
//         op +='<div>$'+pprc+'</div>'
//         op += '<button id="btnBuy"> Buy It</button>'
//         document.getElementById("#targ").innerHtml= op;
       
//         })
        
//         document.getElementById('#targ').addEventListener('click',function(e){
//             if(e.target.tagName == 'BUTTON'){
//                 console.log('okkkkkkkkk')
//             }
//     });
    
//     });