import React, { Component } from "react";

class Banniere extends Component {
  render() {
    const css1 = {
      backgroundImage: "url(/img/francois.jpg)",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      filter: "grayscale(100%)",
      outline: "2px solid white",
      outlineOffset: "-15px",
      color: "white",
      fontSize: "24px",
      //backgroundPosition: "center center",
      //borderStyle: "solid",
      //borderColor: "white",
      //borderWidth: "2px",
    };
    const css2 = {
      backgroundImage: "url(/img/logotransparent.png)",
      backgroundSize: "75%",
      backgroundRepeat: "no-repeat",
      filter: "grayscale(100%)",
      //outline: "2px solid white",
      //outlineOffset: "-15px",
      color: "white",
      fontSize: "24px",
      backgroundPosition: "center center",
      //borderStyle: "solid",
      //borderColor: "white",
      //borderWidth: "2px",
      opacity: 0.5,
    };

    return (
      <div class=" h100 w100 flex column jcc aic">
        <div style={css1} class="flex column jcc aic w100 h60">
          <p> Legacy</p>
          <p> Château de la Tour</p>
          <p>____________</p>
        </div>
        <div style={css2} class="flex jcc aic textWhite1 textXL w90 h20"></div>
        <div class="flex column jcc aic textGrey1 w90 h20">
          <p class="textL">Ad Lorem ipsum dolor</p>
          <p>Domaine de Meursault</p>
          <p>En plein coeur du Finistère</p>
          <p>Elu Meilleur vin du Monde 2022</p>
          <br></br>
          <p class="textXL">Contact</p>
          <p>Emile Duchamp</p>
          <p>educhamp@vin.fr</p>
          <p>36 route du vin 75015 Quimper</p>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Banniere;
