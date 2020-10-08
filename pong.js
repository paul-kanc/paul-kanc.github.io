
/* @pjs preload="zx_spectrum-7_bold.ttf","zx_spectrum-7.ttf","trophy.png","skull.jpg","retro music.wav","menu.wav","return.wav","wall.wav","point.wav","PCpoint.wav","victory.wav","PCvictory.wav"; */

var startScrn;

var fontTitle;
var fontBody;

var modeScrn;

var one;

var levelScrn;

var PCSpeed = 0, rnd = 0;

var gameScrnVPC;
var gameScrn;

var xBall;
var yBall;
var diameter;

var xBallSpeed;
var yBallSpeed;
var xSpeed;
var ySpeed;

var xLeftPaddle;
var yLeftPaddle;

var xRightPaddle;
var yRightPaddle;

var w, s, up, dwn;

var readyScrnVPC;
var readyScrn;

var scoreCountB;

var leftScoreInt;
var rightScoreInt;

var scoreScrnVPC;
var scoreScrn;

var endScrnVPC;
var endScrn;

var trophy;
var skull;

var musicVol = 0.3, menuVol = 0.15, hitVol = 0.05, wallVol = 0.3, pointVol = 0.1, PCpointVol = 0.09, victoryVol = 0.5, PCvictoryVol = 0.09;

var musicI = 0;

function setup()
{
  createCanvas(1200, 700);
  
  startScrn = true;
  start = new Start();
  
  modeScrn = false;
  mode = new Mode();
  
  levelScrn = false;
  level = new Level();
  
  gameScrnVPC = false;
  gameVPC = new GameVPC();
  
  gameScrn = false;
  game = new Game();
  
  readyScrnVPC = false;
  readyVPC = new ReadyVPC();
  
  readyScrn = false;
  ready = new Ready();
  
  scoreCountB = false;
  scoreCount = new ScoreCount();
  
  scoreScrnVPC = false;
  scoreVPC = new ScoreVPC();
  
  scoreScrn = false;
  score = new Score();
  
  endScrnVPC = false;
  endVPC = new EndVPC();
  
  endScrn = false;
  end = new End();
  
  musicV = new Sound(this);
  menuV = new Sound(this);
  hitV = new Sound(this);
  wallV = new Sound(this);
  pointV = new Sound(this);
  PCpointV = new Sound(this);
  victoryV = new Sound(this);
  PCvictoryV = new Sound(this);
}

function draw()
{
  if (startScrn == true)
  {
    start.draw();
    musicI = musicI + 1;
    
    if (musicI == 1)
    {
      musicV.volume(musicVol);
      music.loop();
    }
  }
  
  if (modeScrn == true)
  {
    mode.draw();
  }
  
  if (levelScrn == true)
  {
    level.draw();
  }
  
  if (readyScrnVPC == true)
  {
    readyVPC.draw();
  }
  
  if (readyScrn == true)
  {
    ready.draw();
  }
  
  if (gameScrnVPC == true)
  {
    gameVPC.draw();
  }
  
  if (gameScrn == true)
  {
    game.draw();
  }
  
  if (scoreCountB == true)
  {
    scoreCount.draw();
  }
  
  if (gameScrn == true)
  {
    if (xBall == 0 + diameter/2)
    {
      if (leftScoreInt != 3 && rightScoreInt != 3)
      {
        pointV.volume(pointVol);
        point.play();
      }
      else
      {
        victoryV.volume(victoryVol);
        victory.play();
      }
      
      scoreScrn = true;
      gameScrn = false;
      scoreCountB = false;
    }
    
    else if (xBall == width - diameter/2)
    {
      if (leftScoreInt != 3 && rightScoreInt != 3)
      {
        pointV.volume(pointVol);
        point.play();
      }
      else
      {
        victoryV.volume(victoryVol);
        victory.play();
      }
      scoreScrn = true;
      gameScrn = false;
      scoreCountB = false;
    }
  }
  
  else if (gameScrnVPC == true)
  {
    if (xBall == 0 + diameter/2)
    {
      if (leftScoreInt != 3 && rightScoreInt != 3)
      {
        PCpointV.volume(PCpointVol);
        PCpoint.play();
      }
      else
      {
        PCvictoryV.volume(PCvictoryVol);
        PCvictory.play();
      }
    
      scoreScrnVPC = true;
      gameScrnVPC = false;
      scoreCountB = false;
    }
    
    else if (xBall == width - diameter/2)
    {
      if (leftScoreInt != 3 && rightScoreInt != 3)
      {
        pointV.volume(pointVol);
        point.play();
      }
      else
      {
        victoryV.volume(victoryVol);
        victory.play();
      }
      
      scoreScrnVPC = true;
      gameScrnVPC = false;
      scoreCountB = false;
    }
  }
  
  if (scoreScrn == true)
  {
    score.draw();
  }
  
  if (scoreScrnVPC == true)
  {
    scoreVPC.draw();
  }
  
  if (scoreScrn == true)
  {
    if (leftScoreInt == 3 || rightScoreInt == 3)
    {
      endScrn = true;
      scoreScrn = false;
    }
  }
  
  if (scoreScrnVPC == true)
  {
    if (leftScoreInt == 3 || rightScoreInt == 3)
    {
      endScrnVPC = true;
      scoreScrnVPC = false;
    }
  }
  
  if (endScrn == true)
  {
    end.draw();
  }
  
  else if (endScrnVPC == true)
  {
    endVPC.draw();
  }
}
  
function keyPressed()
{  
  if (startScrn == true)
  {    
    if (key == ' ')
    {
      startScrn = false;
      modeScrn = true;
    }
  }
    
  if (modeScrn == true)
  {
    if (key == '2')
    {
      modeScrn = false;
      readyScrn = true;
      
      xBall = width/2;
      yBall = random(height/7, height*6/7);
      
      xLeftPaddle = 50;
      yLeftPaddle = height/2 - 50;
    
      xRightPaddle = width - 50;
      yRightPaddle = height/2 - 50;
      
      leftScoreInt = 0;
      rightScoreInt = 0;
      
      music.stop();
      
      menuV.volume(menuVol);
      menu.play();
    }
    else if (key == '1')
    {
      one = one + 1;
      
      if (one == 1)
      {
        modeScrn = false;
        levelScrn = true;
        
        xBall = width/2;
        yBall = random(height/7, height*6/7);
        
        xLeftPaddle = 50;
        yLeftPaddle = height/2 - 50;
      
        xRightPaddle = width - 50;
        yRightPaddle = height/2 - 50;
        
        leftScoreInt = 0;
        rightScoreInt = 0;
      }
    }
  }
  
  if (levelScrn == true)
  {
    if (key == '1')
    {
      one = one + 1;
      
      if (one == 1)
      {
        rnd = -80;
        PCSpeed = 6;
        readyScrnVPC = true;
        levelScrn = false;
        
        music.stop();
        
        menuV.volume(menuVol);
        menu.play();
      }
    }
    
    else if (key == '2')
    {
      rnd = -40;
      PCSpeed = 6;
      readyScrnVPC = true;
      levelScrn = false;
      
      music.stop();
      
      menuV.volume(menuVol);
      menu.play();
    }
    
    else if (key == '3')
    {
      rnd = 10;
      PCSpeed = 5;
      readyScrnVPC = true;
      levelScrn = false;
      
      music.stop();
      
      menuV.volume(menuVol);
      menu.play();
    }
  }
  
  if (readyScrn == true)
  {
    if (key == ' ')
    {
      readyScrn = false;
      gameScrn = true;
      scoreCountB = true;
      
      menuV.volume(menuVol);
      menu.play();
    }
  }
  
  else if (readyScrnVPC == true)
  {
    if (key == ' ')
    {
      readyScrnVPC = false;
      gameScrnVPC = true;
      scoreCountB = true;
      
      menuV.volume(menuVol);
      menu.play();
    }
  }
  
  if (gameScrn == true)
  {
    game.keyPressed();
  }
  
  else if (gameScrnVPC == true)
  {
    gameVPC.keyPressed();
  }
    
  if (scoreScrn == true)
  {
    if (key == ' ')
    {
      scoreScrn = false;
      readyScrn = true;
      
      xBall = width/2;
      yBall = random(height/7, height*6/7);
      
      xLeftPaddle = 50;
      yLeftPaddle = height/2 - 50;
    
      xRightPaddle = width - 50;
      yRightPaddle = height/2 - 50;
      
      menuV.volume(menuVol);
      menu.play();
    }
  }
  
  else if (scoreScrnVPC == true)
  {
    if (key == ' ')
    {
      scoreScrnVPC = false;
      readyScrnVPC = true;
      
      xBall = width/2;
      yBall = random(height/7, height*6/7);
      
      xLeftPaddle = 50;
      yLeftPaddle = height/2 - 50;
    
      xRightPaddle = width - 50;
      yRightPaddle = height/2 - 50;
      
      menuV.volume(menuVol);
      menu.play();
    }
  }
  
  if (key == ESC)
  {
    exit();
  }
  
  if (key == 'r' || key == 'R')
  {
    if (startScrn == false && modeScrn == false && levelScrn == false)
    {
      musicI = 0;
      
      menuV.volume(menuVol);
      menu.play();
    }
    
    gameScrn = false;
    modeScrn = false;
    levelScrn = false;
    readyScrn = false;
    scoreCountB = false;
    scoreScrn = false;
    endScrn = false;
    
    gameScrnVPC = false;
    readyScrnVPC = false;
    scoreScrnVPC = false;
    endScrnVPC = false;
    
    victory.stop();
    PCvictory.stop();
    
    rnd = 0;
    PCSpeed = 0;
    
    startScrn = true;
  }
}
  
function keyReleased()
{
  if (key == '1')
  {
    one = 0;
  }
  
  if (gameScrn == true)
  {
    game.keyReleased();
  }
  
  if (gameScrnVPC == true)
  {
    gameVPC.keyReleased();
  }
}

class Start
{
  var x = width/2, xv = 5, y = height/2 - 50, yv = 5;
    
  function draw()
  {
    background(0);
    
    textFont(fontTitle);
    textAlign(CENTER);
    fill(255);
    text("PONG", width/2, 150);
    
    textFont(fontBody);
    textSize(50);
    text("By Paulius Kancleris", width/2, 200);
    
    fill(255);
    ellipse(x, y, 30, 30);
    
    x = x + xv;
    y = y + yv;
    
    if (y == height/2 - 100 || y == height/2)
    {
      yv = -yv;
    }
    
    if (x > width - 15 || x < 15)
    {
      xv = -xv;    
    }
    
    fill(255);
    textSize(50);
    text("Press 'R' To Restart", width/2, 450);
    text("Press 'ESC' To Quit", width/2, 500);
    
    textFont(fontBody);
    text("Press SPACE To Begin", width/2, 600);
  }
}

class Mode
{
  function draw()
  {
    background(0);
    
    textFont(fontTitle);
    textAlign(CENTER);
    fill(255);
    text("PONG", width/2, 150);
    
    textFont(fontBody);
    text("Use '1' And '2' To", width/2, 300);
    text("Select The Number Of Players", width/2, 350);
  }
}

class Level
{
  function draw()
  {
    background(0);
    
    textFont(fontTitle);
    textAlign(CENTER);
    fill(255);
    text("PONG", width/2, 150);
    
    textFont(fontBody);
    textSize(75);
    text("Use '1', '2' And '3' To", width/2, 250);
    text("Select The Difficulty", width/2, 300);
    
    text("1", width*2/9 - 75, 400);
    text("2", width*5/9 - 75, 400);
    text("3", width*8/9 - 75, 400);
    
    textSize(50);
    text("Easy Peasy ", width*2/9 - 75, 450);
    text("Leamon Squeazy", width*2/9 - 75, 475);
    text("Kinda Hard, NGL", width*5/9 - 75, 450);
    text("I have rallied", width*8/9 - 75, 450);
    text("with this difficulty", width*8/9 - 75, 475);
    text("for 40 mins, trust", width*8/9 - 75, 500);
    text("me, you won't win.", width*8/9 - 75, 525);
  }
}

class Ready
{
  function draw()
  {
    background(0);
    
    for (var x = 2.5; x < height - 50; x = x + 10)
    {
      fill(255);
      rect(width/2 - 5, x * 10, 20, 50);
    }
    
    textFont(fontTitle);
    textAlign(CENTER);
    fill(255);
    textSize(100);
    text(leftScoreInt, width/2 - 70, 70);
    text(rightScoreInt, width/2 + 70, 70);
    
    fill(255);
    noStroke();
    rect(xLeftPaddle, yLeftPaddle, 10, 100);
    rect(xRightPaddle, yRightPaddle, 10, 100);
    
    textFont(fontBody);
    textAlign(CENTER);
    fill(255);
    textSize(50);
    text("Left Player", width/4, 300);
    text("Use 'W' and 'S'", width/4, 350);
    
    text("Right Player", width*3/4, 300);
    text("Use 'UP' and 'DOWN'", width*3/4, 350);
    
    textFont(fontBody);
    text("Press SPACE To Start", width/2, 600);
  }
}

class ReadyVPC
{
  function draw()
  {
    background(0);
    
    for (var x = 2.5; x < height - 50; x = x + 10)
    {
      fill(255);
      rect(width/2 - 5, x * 10, 20, 50);
    }
    
    textFont(fontTitle);
    textAlign(CENTER);
    fill(255);
    textSize(100);
    text(leftScoreInt, width/2 - 70, 70);
    text(rightScoreInt, width/2 + 70, 70);
    
    fill(255);
    noStroke();
    rect(xLeftPaddle, yLeftPaddle, 10, 100);
    rect(xRightPaddle, yRightPaddle, 10, 100);
    
    textFont(fontBody);
    textAlign(CENTER);
    fill(255);
    textSize(50);
    text("Player", width/4, 300);
    text("Use 'UP' and 'DOWN'", width/4, 350);
    
    textFont(fontBody);
    text("Press SPACE To Start", width/2, 600);
  }
}

class Game
{  
  {
    xBall = width/2;
    yBall = random(height/7, height*6/7);
    diameter = 30;
  
    xSpeed = (Math.random() < 0.5);
    if (xSpeed == true)
    {
      xBallSpeed = 5;
    }
    else
    {
      xBallSpeed = -5;
    }
  
    ySpeed = (Math.random() < 0.5);
    if (ySpeed == true)
    {
      yBallSpeed = 5;
    }
    else
    {
      yBallSpeed = -5;
    }
    
    xLeftPaddle = 50;
    yLeftPaddle = height/2 - 50;
    
    xRightPaddle = width - 50;
    yRightPaddle = height/2 - 50;
      
    w = 0;
    s = 0;
    up = 0;
    dwn = 0;
  }
  
  function draw()
  {
    background(0);
    
    for (var x = 2.5; x < height - 50; x = x + 10)
    {
      fill(255);
      rect(width/2 - 5, x * 10, 20, 50);
    }
    
    fill(255);
    noStroke();
    ellipse(xBall, yBall, diameter, diameter);
    
    xBall = xBall + xBallSpeed;
    yBall = yBall + yBallSpeed;
    
    if (xBall == diameter/2 || xBall == width - diameter/2)
    {
      xBallSpeed = -xBallSpeed;
    }
    
    else if (yBall < diameter/2 || yBall > height - diameter/2)
    {
      yBallSpeed = -yBallSpeed;
      wallV.volume(wallVol);
      wall.play();
    }
      
    fill(255);
    noStroke();
    rect(xLeftPaddle, yLeftPaddle, 10, 100);
    
    fill(255);
    noStroke();
    rect(xRightPaddle, yRightPaddle, 10, 100);
      
    if ((xBall + diameter/2 == xRightPaddle) && (yBall + (diameter/2 - 5) > yRightPaddle && yBall - (diameter/2 - 5) < yRightPaddle + 100))
    {
      xBallSpeed = -xBallSpeed;
      hitV.volume(hitVol);
      hit.play();
    }
      
    if ((xBall - diameter/2 == xLeftPaddle + 10) && (yBall + (diameter/2 - 5) > yLeftPaddle && yBall - (diameter/2 - 5) < yLeftPaddle + 100))
    {
      xBallSpeed = -xBallSpeed;
      hitV.volume(hitVol);
      hit.play();
    }
    
    textFont(fontTitle);
    textAlign(CENTER);
    fill(255);
    textSize(100);
    
    text(leftScoreInt, width/2 - 70, 70);
    text(rightScoreInt, width/2 + 70, 70);
  }
  
  function keyPressed()
  {
    if (key == 'w' || key == 'W')
    {
      w = w + 1;
      
      if (w == 1)
      {
        yLeftPaddle = yLeftPaddle - 30;
      }
    }
    
    if (key == 's' || key == 'S')
    {
      s = s + 1;
      
      if (s == 1)
      {
        yLeftPaddle = yLeftPaddle + 30;
      }
    }
    
    if (keyCode == UP)
    {
      up = up + 1;
      
      if (up == 1)
      {
        yRightPaddle = yRightPaddle - 30;
      }
    }
    
    if (keyCode == DOWN)
    {
      dwn = dwn + 1;
      
      if (dwn == 1)
      {
        yRightPaddle = yRightPaddle + 30;
      }
    }
  }
  
  function keyReleased()
  {
    if (key == 'w' || key == 'W')
    {
      w = 0;
    }
      
    if (key == 's' || key == 'S')
    {
      s = 0;
    }
      
    if (keyCode == UP)
    {
      up = 0;
    }
      
    if (keyCode == DOWN)
    {
      dwn = 0;
    }
  }
}

class GameVPC
{
  var PCR;
  
  {
    xBall = width/2;
    yBall = random(height/7, height*6/7);
    diameter = 30;
  
    xSpeed = (Math.random() < 0.5);
    if (xSpeed == true)
    {
      xBallSpeed = 5;
    }
    else
    {
      xBallSpeed = -5;
    }
  
    ySpeed = (Math.random() < 0.5);
    if (ySpeed == true)
    {
      yBallSpeed = 5;
    }
    else
    {
      yBallSpeed = -5;
    }
    
    xLeftPaddle = 50;
    yLeftPaddle = height/2 - 50;
    
    xRightPaddle = width - 50;
    yRightPaddle = height/2 - 50;
    
    w = 0;
    s = 0;
    up = 0;
    dwn = 0;
  }
  
  function draw()
  {
    background(0);
    
    for (var x = 2.5; x < height - 50; x = x + 10)
    {
      fill(255);
      rect(width/2 - 5, x * 10, 20, 50);
    }
    
    fill(255);
    noStroke();
    ellipse(xBall, yBall, diameter, diameter);
    
    xBall = xBall + xBallSpeed;
    yBall = yBall + yBallSpeed;
    
    if (xBall == diameter/2 || xBall == width - diameter/2)
    {
      xBallSpeed = -xBallSpeed;
    }
    
    else if (yBall < diameter/2 || yBall > height - diameter/2)
    {
      yBallSpeed = -yBallSpeed;
      wallV.volume(wallVol);
      wall.play();
    }
      
    fill(255);
    noStroke();
    rect(xLeftPaddle, yLeftPaddle, 10, 100);
    
    fill(255);
    noStroke();
    rect(xRightPaddle, yRightPaddle, 10, 100);
      
    if ((xBall + diameter/2 == xRightPaddle) && (yBall + (diameter/2 - 5) > yRightPaddle && yBall - (diameter/2 - 5) < yRightPaddle + 100))
    {
      xBallSpeed = -xBallSpeed;
      hitV.volume(hitVol);
      hit.play();
    }
      
    if ((xBall - diameter/2 == xLeftPaddle + 10) && (yBall + (diameter/2 - 5) > yLeftPaddle && yBall - (diameter/2 - 5) < yLeftPaddle + 100))
    {
      xBallSpeed = -xBallSpeed;
      hitV.volume(hitVol);
      hit.play();
    }
    
    if (((xBall + diameter/2 == xRightPaddle) && (yBall + (diameter/2 - 5) > yRightPaddle && yBall - (diameter/2 - 5) < yRightPaddle + 100)) || xBall == width - diameter/2)
    {
      PCR = random(rnd, 10);
    }
    
    if (xBall >= width*2/3 && xBallSpeed > 0)
    {      
      if (yBall - diameter/2 < yRightPaddle + PCR)
      {
        up = up + 1;
      }
      else
      {
        up = 0;
      }
      
      if (yBall + diameter/2 > yRightPaddle + 100 - PCR)
      {
        dwn = dwn + 1;
      }
        else
      {
        dwn = 0;
      }
    }
    
    else if (xBall < width*2/3 || xBallSpeed < 0)
    {
      if (yRightPaddle + 100 > height/2 + 100)
      {
        up = up + 1;
      }
      else
      {
        up = 0;
      }
      
      if (yRightPaddle < height/2 - 100)
      {
        dwn = dwn + 1;
      }
      else
      {
        dwn = 0;
      }
    }
    
    if (up > PCSpeed)
    {
      up = 0;
    }
    
    if (dwn > PCSpeed)
    {
      dwn = 0;
    }
    
    if (up == 1)
    {
      yRightPaddle = yRightPaddle - 30;
    }
    
    if (dwn == 1)
    {
      yRightPaddle = yRightPaddle + 30;
    }
    
    textFont(fontTitle);
    textAlign(CENTER);
    fill(255);
    textSize(100);
    
    text(leftScoreInt, width/2 - 70, 70);
    text(rightScoreInt, width/2 + 70, 70);
  }
  
  function keyPressed()
  {
    if (keyCode == UP)
    {
      w = w + 1;
      
      if (w == 1)
      {
        yLeftPaddle = yLeftPaddle - 30;
      }
    }
     
    if (keyCode == DOWN)
    {
      s = s + 1;
      
      if (s == 1)
      {
        yLeftPaddle = yLeftPaddle + 30;
      }
    }
  }
  
  function keyReleased()
  {
    if (keyCode == UP)
    {
      w = 0;
    }
      
    if (keyCode == DOWN)
    {
      s = 0;
    }
  }
}

class ScoreCount
{
  {
    leftScoreInt = 0;
    rightScoreInt = 0;
  }
  function draw()
  {
    if (xBall == 0 + diameter/2)
    {
      rightScoreInt = rightScoreInt + 1;
    }
    
    else if (xBall == width - diameter/2)
    {
      leftScoreInt = leftScoreInt + 1;
    }
  }
}

class Score
{
  function draw()
  {
    background(0);
    
    textFont(fontBody);
    fill(255);
    textSize(70);
    textAlign(RIGHT);
    text("Left", width/2 - 70, height/2 - 250);
    text("Player", width/2 - 70, height/2 - 200);
    textAlign(LEFT);
    text("Right", width/2 + 70, height/2 - 250);
    text("Player", width/2 + 70, height/2 - 200);
    
    textFont(fontTitle);
    textAlign(CENTER);
    textSize(300);
    text(leftScoreInt, width/2 - 130, height/2);
    text(":", width/2, height/2);
    text(rightScoreInt, width/2 + 130, height/2);
    
    if (leftScoreInt == 2)
    {
      textFont(fontBody);
      textSize(70);
      textAlign(RIGHT);
      text("1 Point Left!", width/2 - 70, height*2/3);
    }
    
    if (rightScoreInt == 2)
    {
      textFont(fontBody);
      textSize(70);
      textAlign(LEFT);
      text("1 Point Left!", width/2 + 70, height*2/3);
    }
    
    textFont(fontBody);
    textAlign(CENTER);
    text("Press SPACE To Continue", width/2, 600);
  }
}

class ScoreVPC
{
  function draw()
  {
    background(0);
    
    textFont(fontBody);
    fill(255);
    textSize(70);
    textAlign(RIGHT);
    text("Player", width/2 - 70, height/2 - 200);
    textAlign(LEFT);
    text("Computer", width/2 + 70, height/2 - 200);
    
    textFont(fontTitle);
    textAlign(CENTER);
    textSize(300);
    text(leftScoreInt, width/2 - 130, height/2);
    text(":", width/2, height/2);
    text(rightScoreInt, width/2 + 130, height/2);
    
    if (leftScoreInt == 2)
    {
      textFont(fontBody);
      textSize(70);
      textAlign(RIGHT);
      text("1 Point Left!", width/2 - 70, height*2/3);
    }
    
    if (rightScoreInt == 2)
    {
      textFont(fontBody);
      textSize(70);
      textAlign(LEFT);
      text("1 Point Left!", width/2 + 70, height*2/3);
    }
    
    textFont(fontBody);
    textAlign(CENTER);
    text("Press SPACE To Continue", width/2, 600);
  }
}

class End
{
  var trophyY = -200, v = 3.5;
  
  function draw()
  {
    background(0);
    
    image(trophy, width/2 - 100, trophyY = trophyY + v, 200, 200);
    
    if (trophyY > height/3 + 50)
    {
      v = 0;
      
      textFont(fontTitle);
      textAlign(CENTER);
      fill(255);
      textSize(150);
      text(leftScoreInt, width/2 - 70, height/7);
      text(":", width/2, height/7);
      text(rightScoreInt, width/2 + 70, height/7);
      
      if (leftScoreInt == 3)
      {
        text("Left Player WINS!", random(width/2 - 1, width/2 + 1), random(height/3 - 1, height/3 + 1));
      }
      
      if (rightScoreInt == 3)
      {
        text("Right Player WINS!", random(width/2 - 1, width/2 + 1), random(height/3 - 1, height/3 + 1));
      }
      
      textFont(fontBody);
      textSize(50);
      text("Press 'ESC' To Quit", width/2, 525);
    
      textFont(fontBody);
      text("Press 'R' To Restart", width/2, 600);
    }
  }
}

class EndVPC
{
  var trophyY = -200, v = 3.5;
  
  function draw()
  {
    background(0);
    
    if (leftScoreInt == 3)
    {
      image(trophy, width/2 - 100, trophyY = trophyY + v, 200, 200);
      
      if (trophyY > height/3 + 50)
      {
        v = 0;
        
        textFont(fontTitle);
        textAlign(CENTER);
        fill(255);
        textSize(150);
        text(leftScoreInt, width/2 - 70, height/7);
        text(":", width/2, height/7);
        text(rightScoreInt, width/2 + 70, height/7);
        
        textFont(fontTitle);
        textAlign(CENTER);
        fill(255);
        textSize(150);
        text("YOU WIN!", random(width/2 - 1, width/2 + 1), random(height/3 - 1, height/3 + 1));
        
        textFont(fontBody);
        textAlign(CENTER);
        fill(255);
        textSize(50);
        text("Press 'ESC' To Quit", width/2, 525);
      
        textFont(fontBody);
        textAlign(CENTER);
        fill(255);
        text("Press 'R' To Restart", width/2, 600);
      }
    }
    
    if (rightScoreInt == 3)
    {
      textFont(fontTitle);
      textAlign(CENTER);
      fill(255);
      textSize(150);
      text(leftScoreInt, width/2 - 70, height/7);
      text(":", width/2, height/7);
      text(rightScoreInt, width/2 + 70, height/7);
      
      textFont(fontTitle);
      textAlign(CENTER);
      fill(255);
      textSize(150);
      text("YOU LOSE!", random(width/2 - 1, width/2 + 1), random(height/3 - 1, height/3 + 1));
      
      image(skull, width/2 - 100, height/2 - 75, 200, 200);
      
      textFont(fontBody);
      textAlign(CENTER);
      fill(255);
      textSize(50);
      text("Press 'ESC' To Quit", width/2, 525);
    
      textFont(fontBody);
      textAlign(CENTER);
      fill(255);
      text("Press 'R' To Restart", width/2, 600);
    }
  }
}