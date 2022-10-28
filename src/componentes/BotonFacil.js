export class BotonFacil {
    
  constructor(scene) {
   this.relatedScene = scene; 
                   
  }


  preload(){
      this.relatedScene.load.image('botonFacil', './imagenes/facil.png');    
      
  }
  
  create(){

    this.startButton= this.relatedScene.add.image(650,500, 'botonFacil').setInteractive();       
    this.startButton.on('pointerdown', () => {                       
    this.relatedScene.scene.start('Game');                     
  });

    
   

  }
    

}