/*/ Escena Menu /*/

import { LvlunoButton } from "./BotoonLvlUno.js";   // Se importa el componente lvlunoButton.
import { lvlAlienButton } from './BottonNotSpace.js'    // Se importa el componente LvlLofi
import Phaser from "phaser";
export class Menu extends Phaser.Scene {



   constructor() {

      super('Menu');

      this.LvlunoButton = new LvlunoButton(this);           // Constructores para la escena y  los  botones.
      this.LvlLofi = new this.LvlLofi(this);

   }


   preload() {
      this.load.image('menu', './imagenes/fondo.jpg');
      this.load.image('arkanoid', './imagenes/arkanoid.png');
      this.LvlunoButton.preload();                                   // Se precarga las imagenes y los botones.
      this.LvlLofi.preload();
      this.load.audio('sonidobotones', './musica/sonidobotones.mp3');

   }


   create() {

      this.add.image(665, 374, 'menu');
      this.add.image(665, 150, 'arkanoid');                // Se crean las imagenes y los botones.
      this.LvlunoButton.create();
      this.LvlNormal.create();
      this.sonidobotones = this.sound.add('sonidobotones');


   }


   update() {
      this.sonidobotones.play();

   }




}