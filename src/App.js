
import Phaser from 'phaser';
import Game from './componentes/Game.js';
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
            scene:[Game,JuegoAcabado,Ganaste],     // Se guardan las escenas del juego.
            physics: {
                default: 'arcade',
                arcade: {                               // Se habilitan las fisicas
                    debug: false
                }
            }

        };

        const game = new Phaser.Game(config); //Arranca el juego.
        game.events.on("LISTO", setListo) //Trigger cuando el juego esta completamente cargado.

        return() =>{ //Return que evita que se generen duplicados en el lienzo.
            setListo(false);
            game.destroy(true);
        }
    }, [listo]);

}

export default App;

