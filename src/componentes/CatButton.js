/*/  Boton Gato Nivel /*/

export class BotonGato {
    constructor(scene) {
    this.relatedScene = scene;    // Constructor por defecto para la escena.
                     
    }


    preload(){
        
        this.relatedScene.load.image('botongato', './imagenes/catbutton.png');     // Precarga de la imagen del boton.

    }
    
    create(){

          
      this.startButton= this.relatedScene.add.image(632,400, 'botongato').setInteractive();    // Mediante la variable  "startButton"  se le asigna la imagen precargada al boton. 
      this.startButton.on('pointerdown', () => {                                            // Funcion que activa el cambio de escena al clickear el boton.
      this.relatedScene.scene.start('NivelGato');                                                // Permite que el boton redireccione a la escena del juego (NivelGato).
      
    
    
    
    
    });

      
     

    }
    
   

}