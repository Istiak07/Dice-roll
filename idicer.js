function generateRandomNums() {
    var x=Math.floor(Math.random()*6+1);
    return x;
}

function getImage(){
    var p=generateRandomNums();
        return ("./images/dice"+p+".svg");
}
function whoWins(p1,p2) {
    if (p1>p2) {
        return (document.getElementsByTagName("h1")[0].innerHTML="✌️ P-1 WON ");
    }
    else if(p1===p2){
       return (document.getElementsByTagName("h1")[0].innerHTML="✌️ DRAW ✌️");
    }
    else{
        return (document.getElementsByTagName("h1")[0].innerHTML=" P-2 WON ✌️");
    }
    
}
var refreshBtn = document.querySelector(".btn");

function handleClick() {
  window.location.reload();
}
refreshBtn.addEventListener("click", handleClick);
var first=getImage()
var second=getImage()
whoWins(first,second);
document.querySelector(".dice .img1").setAttribute("src",first);
document.querySelector(".dice .img2").setAttribute("src",second);


