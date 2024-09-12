import React from "react";
import {OptionBarContainer, OptionBarContainers} from "./Styles";

function OptionBar () {

  const options = ["Todos", "Podcast", "Musica", "Nicola Porcela", "Mixes", "Videojuegos", "Indie Pop", "Indie Rock", "Tiempo real", "noticias", "Dualipa"];
  const optionList = options.map((option,index) => {
    return <OptionBarContainer key={index}>{option}</OptionBarContainer>
  }); 

 return(
  <OptionBarContainers>
    {optionList}
  </OptionBarContainers> 
 )
}

export default OptionBar;
