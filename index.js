console.log("Never gonna give you up")
// var butt=document.querySelectorAll("button")[0]
// butt.addEventListener("click",function(){
//   butt.classList.add("buttpress")
//   setTimeout(function(){butt.classList.remove("buttpress")},200)
// })
var pscore=document.querySelector(".score1")
var cscore=document.querySelector(".score2")
var rick=""
document.addEventListener("keydown",function(event){
  // console.log(event.key);
  rick+=event.key;
  console.log(rick)
  if(rick=="rick"){
    // document.querySelector(".rick").style.visibility="visible";
  }
})
function computer(){
  var c=Math.floor(Math.random()*9)+1;
  if(c==1||c==2||c==3){return "PAPER";}
  if(c==5||c==5||c==6){return "STONE";}
  return "SCISSORS";
}
// document.querySelector(".btn").addEventListener("click",revert)
document.querySelectorAll(".player-side .butt")[0].addEventListener("click", function(event){calculate(this)})
document.querySelectorAll(".player-side .butt")[1].addEventListener("click", function(event){calculate(this)})
document.querySelectorAll(".player-side .butt")[2].addEventListener("click", function(event){calculate(this)})
function revert(){
  for(var i=0;i<document.querySelectorAll(".butt").length;i++){
    // document.querySelector(".rick").style.visibility="hidden";

    document.querySelectorAll(".butt")[i].classList.remove("win-style","lose-style","tie-style");
  }
}
function calculate(e) {
  if(pscore.innerHTML==6&& cscore.innerHTML==9){
    for(var i=0;i<document.querySelectorAll(".butt").length;i++){
      document.querySelectorAll(".play-butts div")[0].innerHTML="<a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\"><button type=\"button\" name=\"button\" class=\"butt\">SCISSORS</button></a>"
    }
  }
  c=computer();
  // console.log(c);
  u=e.innerHTML
  // e.classList.add("buttpress");
  if(c==u){
    document.querySelector(".result h2").innerHTML="Its a Tie";
    document.querySelector("."+c).classList.add("tie-style");
    e.classList.add("tie-style");
    setTimeout(revert,800)
  }
  if(c=="PAPER" && u=="STONE"){
    lose(e,c)
  }
  if(c=="PAPER" && u=="SCISSORS"){
    win(e,c)
  }
  if(c=="STONE" && u=="SCISSORS"){
    lose(e,c)
  }
  if(c=="STONE" && u=="PAPER"){
    win(e,c)
  }
  if(c=="SCISSORS" && u=="STONE"){
    win(e,c)
  }
  if(c=="SCISSORS" && u=="PAPER"){
    // console.log("hehe");
    lose(e,c)
  }
}
function win(e,c){
  e.classList.add("win-style");
  pscore.innerHTML++;
  document.querySelector(".result h2").innerHTML="You Win yay!!";
  document.querySelector("."+c).classList.add("lose-style");
  setTimeout(revert,800)
}
function lose(e,c){
  e.classList.add("lose-style");
  cscore.innerHTML++;
  document.querySelector(".result h2").innerHTML="You Lose F.";
  document.querySelector("."+c).classList.add("win-style");
  setTimeout(revert,800)
}
