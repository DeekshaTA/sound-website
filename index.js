var numberOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        buttonAnimation(buttonInnerHTML);
        makesound(buttonInnerHTML);
        
        
});
}
document.addEventListener("keypress",function(){
buttonAnimation(event.key);makesound(event.key); });
function makesound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/crash.mp3");
            tom1.play();
            document.querySelector()
        case "a":
            var tom1=new Audio("sounds/kick-bass.mp3");
            tom1.play();
        case "s":
            var tom1=new Audio("sounds/snare.mp3");
            tom1.play();
        case "d":
            var tom1=new Audio("sounds/tomm-1.mp3");
            tom1.play();
        case "j":
            var tom1=new Audio("sounds/tom-2.mp3");
            tom1.play();
        case "k":
            var tom1=new Audio("sounds/tom-3.mp3");
            tom1.play();
        case "l":
            var tom1=new Audio("sounds/tom-4.mp3");
            tom1.play();
    }
}
function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
