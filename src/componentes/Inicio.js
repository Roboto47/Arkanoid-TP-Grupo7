
/*/ Escena Menu /*/

import { BotonFacil } from "./BotonFacil";   
import { BotonAvanzado } from "./BotonAvanzado";      
import Phaser from "phaser";
export class Inicio extends Phaser.Scene{



    constructor (){

    super( 'Inicio'  );                        

    this.BotonFacil= new BotonFacil(this);           
    this.BotonAvanzado= new BotonAvanzado(this);
   
 }

      preload(){
        this.load.image('inicio','./imagenes/fondo.jpg');
        this.BotonFacil.preload();                                   
        this.BotonAvanzado.preload();                   
      
      }
         
      create(){
       
         this.add.image(665,374,'inicio');
         this.BotonFacil.create(); 
         this.BotonAvanzado.create();                          
         
      }

      
     update(){
     
   }

     

      
}