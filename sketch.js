var ninja,ninjaStanding, ninjaAttack
var gameState = "Play"


function preload(){
    ninjaStanding =  loadAnimation("images/Idle__000.png","images/Idle__001.png","images/Idle__002.png",
    "images/Idle__003.png","images/Idle__004.png","images/Idle__005.png","images/Idle__006.png",
    "images/Idle__007.png","images/Idle__008.png","images/Idle__009.png",)

    ninjaAttack = loadAnimation("images/Attack__000.png","images/Attack__001.png","images/Attack__002.png",
    "images/Attack__003.png","images/Attack__004.png","images/Attack__005.png","images/Attack__006.png",
    "images/Attack__007.png","images/Attack__008.png","images/Attack__009.png")

}

function setup(){
createCanvas(1700,760)
ninja =  createSprite(850,300,50,50)
ninja.scale = 0.5;
ninja.addAnimation("standing",ninjaStanding);
ninja.addAnimation("attack",ninjaAttack)


}

function draw(){

    background("lightgreen");
    
    if(gameState === "Play"){
    

     if(keyWentDown("UP_ARROW")){
    ninja.changeAnimation("attack",ninjaAttack);
}
if(keyWentUp("UP_ARROW")){
    ninja.changeAnimation("standing",ninjaStanding);
}
   


}
    drawSprites();
}