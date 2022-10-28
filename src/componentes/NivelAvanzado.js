import Phaser from "phaser";
class NivelAvanzado extends Phaser.Scene{


constructor(){

super('NivelAvanzado' );     

}


//Precargando imagen y audio
preload(){

this.load.image('fondo','./imagenes/fondo.jpg');
this.load.image('barra','./imagenes/barra.png');
this.load.image('pelota','./imagenes/pelota.png');
this.load.image('bloqueazul','./imagenes/bloqueazul.png');
this.load.image('bloquerojo','./imagenes/bloquerojo.png');
this.load.image('bloqueverde','./imagenes/bloqueverde.png');
this.load.audio('musicaescena', './musica/escena.mp3');
this.load.audio('gameover', './musica/gameover.mp3');
this.load.audio('gameover2', './musica/gameover2.mp3');
this.load.audio('bloquedestruccion', './musica/bloquedestruccion.mp3');
this.load.audio('youwin', './musica/youwin.mp3');
this.load.audio('youwin2', './musica/youwin2.mp3');
this.load.audio('barrasonido', './musica/barrasonido.mp3');

}



create(){

// Creando de musica y sonido 
  this.musicaescena = this.sound.add('musicaescena');
  this.gameover = this.sound.add('gameover');
  this.gameover2 = this.sound.add('gameover2');
  this.youwin = this.sound.add('youwin');
  this.youwin2 = this.sound.add('youwin2');
  this.bloquedestruccion = this.sound.add('bloquedestruccion');
  this.barrasonido = this.sound.add('barrasonido');

// creacion de imagen de fondo 
  this.add.image(665,374,'fondo');
    
 //Creacion de la pelota  
 this.pelota = this.physics.add.image(  650,660, 'pelota');                      
 this.pelota.setCollideWorldBounds(true);                                      
 this.pelota.setBounce(1);                                                      
 this.pelota.setData('union', true);                                           
 
 // Creacion de la barra del jugador 
 this.barra = this.physics.add.image(  650,700, 'barra').setImmovable();      
 this.barra.setCollideWorldBounds(true);                                     
 this.barra.body.allowGravity= false;                                      
 this.cursors = this.input.keyboard.createCursorKeys();                    
 this.physics.add.collider(this.pelota, this.barra);

 //Creacion de los bloques 
 this.bloques = this.physics.add.staticGroup({
    key: ['bloqueverde'],   
    frameQuantity: 10,      
    
    gridAlign: { 
    width: 13,             
    height: 4,             
    cellWidth: 80,        
    cellHeight: 100,      
    x: 200,               
    y: 300,              

  }
});

this.physics.add.collider(this.pelota, this.bloques, this.bloqueColision, null, this);   



// puntaje

   this.scoreText = this.add.text(1150, 25, 'SCORE: 0', { 
   fontSize: '25px', 
   fill: 'yellow', 
   fontFamily: 'Franklin Gothic Medium',
  
});

}

update(){

  
  
// Movimiento del jugador 


if (this.cursors.left.isDown){
  
this.barra.setVelocityX(-1200);           
if(this.pelota.getData('union')) {
    this.pelota.setVelocityX(-1200);
    
  }
}
else if(this.cursors.right.isDown){    
this.barra.setVelocityX(1200);
if (this.pelota.getData('union')) {
    this.pelota.setVelocityX(1200);
  }

}
else {
  
    this.barra.setVelocityX(0);                    
    if (this.pelota.getData('union')) {
        this.pelota.setVelocityX(0);
      }
      

      if (this.cursors.up.isDown) {
        
        if (this.pelota.getData('union')) {                 
          this.pelota.setVelocity(-400, -800);              
          this.pelota.setData('union', false);              
          this.musicaescena.play()                          
          
        }
         
        
      }

     

}

// GameOver

if (this.pelota.y > 700) {

    this.mostrarGameOver();       
    
}

}

//  Colision entre pelota y bloques y victoria si hay 0 bloques

bloqueColision(pelota,bloques) {
 
    this.score++;
    this.scoreText.setText('Score: ' + this.score);  
    this.bloquedestruccion.play();                   

    
    bloques.disableBody(true, true);               
  
  if (this.bloques.countActive() === 0) {          
    this.mostrarPantallaVictoria();
           
  }
  
  
}

// GameOver 
mostrarGameOver(){
 
this.scene.start('JuegoAcabado');                 
this.gameover.play()                             
this.gameover2.play()                           
this.musicaescena.stop();                      
}

// Victoria 
mostrarPantallaVictoria(){

  this.scene.start('ganaste');                
  this.youwin.play();   
  this.youwin2.play();                      
  this.musicaescena.stop();                     
}

init() {
  
  this.score = 0;                   
  
    
}






}

export default NivelAvanzado;            