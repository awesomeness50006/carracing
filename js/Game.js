class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car1.addImage(car1I)
    car2 = createSprite(300,200);
    car2.addImage(car2I)
    car3 = createSprite(500,200);
    car3.addImage(car3I)
    car4 = createSprite(700,200);
    car4.addImage(car4I)
    cars = [car1, car2, car3, car4]
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background(198,135,103)
      image(trackI, 0, -displayHeight*4, displayWidth, displayHeight*5)
      var index = 0;
      var x = 280;
      var y ;
      for(var plr in allPlayers){
        index = index+1;
        x= x+250;
        y = displayHeight-allPlayers[plr].distance;
        cars[index-1].x =x;
        cars[index-1].y = y;
        if (index == player.index){
          stroke(10)
          fill("black")
          rect(x-32.5, y+50, 65, 65)
     cars[index-1].shapeColor = "red";
     camera.position.x = displayWidth/2;
     camera.position.y = cars[index-1].y
       
      }
    }
    
    }
 

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if (player.distance>5200){
      gameState = 2;
    }
    drawSprites();
  }
  end(){
console.log("Game Ended")


  }
}
