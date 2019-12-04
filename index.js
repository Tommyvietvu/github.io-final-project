var isGameOver;
var player;
var playerImage;
var enemy;
var enemyImage;
var enemies1;
var enemies1Image;
var enemies2Image;
var enemies2;
var backgroundImage;

function preload() {
  playerImage = loadImage("images/ninja.png");
  enemyImage = loadImage("images/swordies.png");
  enemiesImage = loadImage("images/swordies.png")
  enemies1Image = loadImage("images/swordies.png")
  enemies2Image = loadImage("images/swordies.png")
  backgroundImage = loadImage("https://i.imgur.com/aKQOg3G.png");
}

function setup() {
  isGameOver = false;
  createCanvas(1000, 1000);
  player = createSprite(width / 2, height - (playerImage.height / 2), 0, 0);
  player.addImage(playerImage);
  enemy = createSprite(width / 2, 0, 0, 0);
  enemy.addImage(enemyImage);
  enemies = createSprite(width / 2, 0, 0, 0);
  enemies.addImage(enemiesImage);
  enemies1 = createSprite(width / 2, 0, 0, 0);
  enemies1.addImage(enemiesImage);
  enemies2 = createSprite(width / 2, 0, 0, 0);
  enemies2.addImage(enemiesImage);
  //enemy.rotationSpeed = 4.0;
}

function draw() {
  if (isGameOver) {
    gameOver();
  } else {
    if (enemy.overlap(player)) {
      isGameOver = true;
    }
    if (enemies.overlap(player)) {
      isGameOver = true;
    }
    if (enemies1.overlap(player)) {
      isGameOver = true;
    }
    if (enemies2.overlap(player)) {
      isGameOver = true;
    }
    background(backgroundImage);
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width / 2))) {
      player.position.x += 5;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width / 2)) {
      player.position.x -= 5;
    }
    enemy.position.y = enemy.position.y + 8;
    if (enemy.position.y > height) {
      enemy.position.y = 0;
      enemy.position.x = random(5, width - 5);
    }
    drawSprites();
  }
  enemies.position.y = enemies.position.y + 6;
  if (enemies.position.y > height) {
    enemies.position.y = 0;
    enemies.position.x = random(5, width - 5);
  }
    enemies1.position.y = enemies1.position.y + 7;
    if (enemies1.position.y > height) {
      enemies1.position.y = 0;
      enemies1.position.x = random(5, width - 5);
  }
  enemies2.position.y = enemies2.position.y + 9;
  if (enemies2.position.y > height) {
    enemies2.position.y = 0;
    enemies2.position.x = random(5, width - 5);
}
}

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width / 2, height / 2);
  text("Click anywhere to try again", width / 2, 3 * height / 4);
}

function mouseClicked() {
  isGameOver = false;
  player.position.x = width / 2;
  player.position.y = height - (playerImage.height / 2);
  enemy.position.x = width / 2;
  enemy.position.y = 0;
  enemies.position.x = random(5, width - 8);
  enemies.position.y = 0;
  enemies1.position.x = random(5, width - 8);
  enemies1.position.y = 0;
  enemies2.position.x = random(5, width - 8);
  enemies2.position.y = 0;
}
