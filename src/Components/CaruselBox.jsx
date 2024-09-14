import React, { Component } from "react";
import Carusel from "react-bootstrap/Carousel";
import GenaImg from "../assets/cheeshand.jpg";
import BanerImg from "../assets/mainPhoto.jpeg";
import chessImg2 from "../assets/chess2.jpg";
import "./../App.css";

export default class CaruselBox extends Component {
  render() {
    return (
      <Carusel>
        <Carusel.Item>
          <img 
          height="630"
          className="d-block w-100" src={GenaImg} alt='"Chess' />
          <Carusel.Caption>
            <h3 className="shadow-text">Brandenburg Schachverein Olga e.V.</h3>
            <h4 className="shadow-text">Der Unterricht für Kinder wird von einem Schachgroßmeister geleitet</h4>
            
          </Carusel.Caption>
        </Carusel.Item>

        <Carusel.Item>
            <img 
            height="630"
            className='d-block w-100'src={ BanerImg } alt='Chess' />
            <Carusel.Caption>  
                <h3 className="shadow-text">Brandenburg Schachverein Olga e.V.</h3>
                <h4 className="shadow-text">Kinder nehmen an interstädtischen Schachturnieren teil</h4>
            </Carusel.Caption>
        </Carusel.Item>

        <Carusel.Item>
            <img 
            height="630"
            className='d-block w-100'src={ chessImg2 } alt='"Chess' />
            <Carusel.Caption>  
                <h3 className="shadow-text">Brandenburg Schachverein Olga e.V.</h3>
                <h4 className="shadow-text">Schachspielen entwickelt Logik, Ausdauer und Charakter</h4>
            </Carusel.Caption>
        </Carusel.Item>
      </Carusel>
    );
  }
}
