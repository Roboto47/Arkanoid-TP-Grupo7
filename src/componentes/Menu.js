
/*/ Escena Menu /*/

import { LvlunoButton } from "./BotoonLvlUno";   // Se importa el componente lvlunoButton.
import { LvlNormal } from "./BotonLvlDos";      // Se importa el componente LvlNormal
import {BotonGato} from "./CatButton";
import Phaser from "phaser";
export class Menu extends Phaser.Scene{



    constructor (){

    super( 'Menu'  );                        

    this.LvlunoButton= new LvlunoButton(this);           // Constructores para la escena y  los  botones.
    this.LvlNormal= new LvlNormal(this);
    this.CatButton= new BotonGato(this);

   
 }


      preload(){
        this.load.image('menu','./imagenes/fondo.jpg');
        this.load.image('arkanoid','./imagenes/arkanoid.png');
        this.LvlunoButton.preload();                                   // Se precarga las imagenes y los botones.
        this.LvlNormal.preload();       
        this.CatButton.preload();            
        this.load.audio('sonidobotones', './musica/sonidobotones.mp3');
      
      }
      
     
      create(){
       
         this.add.image(665,374,'menu');
         this.add.image(665,150,'arkanoid');                // Se crean las imagenes y los botones.
         this.LvlunoButton.create();             
         this.CatButton.create();          
         this.sonidobotones = this.sound.add('sonidobotones');
         
         
      }

      
     update(){
     this.sonidobotones.play();    
     
   }

     

      
}