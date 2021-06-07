var hero,heroIMG;
var zombie,zombieIMG;
var swordzombie,swordzombieIMG;

function preload(){
  heroIMG=loadImage("hero.png");
  zombieIMG=loadAnimation("zombie1.png","zombie2.png","zombie3.png","zombie4.png");
  swordzombieIMG=loadAnimation("swordzombie1.png","swordzombie2.png","swordzombie3.png","swordzombie4.png");
}
function setup() {
  createCanvas(1000,1000);
   hero=createSprite(400, 200, 50, 50);
   hero.addImage(heroIMG);
  zombie=createSprite(50,350);
  zombie.addAnimation("zombie",zombieIMG);
  swordzombie=createSprite(400,400);
  swordzombie.addAnimation("swordzombie",swordzombieIMG)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}