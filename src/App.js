
import Phaser from 'phaser';
import Game from './componentes/Game.js';
import LofiLevel from './componentes/LofiLevel.js';
import { useEffect, useState } from 'react';
import  { JuegoAcabado } from './componentes/GameOver.js'
import { Ganaste } from './componentes/Victoria.js';
import './App.css';

function App() {

 const[ listo,setListo  ]= useState(false);
   
useEffect( () =>{

const config= {
type: Phaser.AUTO,
width:1300,                            // Ancho de la pantalla
height:750,                            // Altura de la pantalla
scene:[LofiLevel,JuegoAcabado,Ganaste],     // Se guardan las escenas del juego. //borré menu para trabajar con lofilevel
physics: {
default: 'arcade',
arcade: {                               // Se habilitan las fisicas
debug: false

}

}

};

const game = new Phaser.Game(config);
game.events.on("LISTO", setListo)

return() =>{

setListo(false);
game.destroy(true);

}
}, [listo]);

}

export default App;

