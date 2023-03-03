function _(id)  {
    return document.querySelector(id)
}

function _All(id)  {
    return document.querySelectorAll(id)
}

function fact(n){
    let res=1;
    for(let i=1;i<n; i++){
        res *=i;
    }
    return(res);
}

function power(a,b){
    let res=1;
    for(let i=1;i<=b;i++){
res *=a;
    }
    return(res);
}

function num2Let(n){
    let ch="";
    if(n>17){ ch="A"}
    else if(n>15){ ch="B"}
    else if(n>15){ ch="C"}
    else if(n>15){ ch="D"}
    return(ch);
}

function maxNum(){
    let res=arguments[0];
    for(let i=1;i<arguments.length;i++){
        if(arguments[i]>res){
            res=arguments[i]
        }
    }
    return(res)
}

function minNum(){
    let res=arguments[0];
    for(let i=1;i<arguments.length;i++){
        if(arguments[i]<res){
            res=arguments[i]
        }
    }
    return(res)
}


function sum(){
    let res=o;
    for(let i=0;i<arguments.length;i++){
        res +=arguments[i];
    }
    return(res);
}