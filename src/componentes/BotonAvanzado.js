export class BotonAvanzado {
    constructor(scene) {
    this.relatedScene = scene;   
                     
    }


    preload(){
        
        this.relatedScene.load.image('botonAvanzado', './imagenes/avanzado.png');     

    }
    
    create(){

          
      this.startButton= this.relatedScene.add.image(632,400, 'botonAvanzado').setInteractive();    
      this.startButton.on('pointerdown', () => {                                           
      this.relatedScene.scene.start('Game');                                                
    
    });

      
     

    }
    
   

   

  
}