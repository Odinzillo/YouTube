import React from "react";
import { MainVideoContainer, RowVideoContainer, VideoContainer } from "./Styles";

function Videos() {

  const initialData = [
    "cuadro1",
    "cuadro2",
    "cuadro3",
    "cuadro4",
    "cuadro5",
    "cuadro6",
    "cuadro7",
    "cuadro8",
    "cuadro9"
  ];
  const matrix =() => {
    let chuncks =[];
    for (let i=0; i< initialData.length; i+=3) {
        chuncks.push(initialData.slice(i,i+3));
    }
      return chuncks;
    };

    const grids =matrix().map((row,index) => {
      return (
        <RowVideoContainer key={index}>
          {row.map((item,index) => {
             return<VideoContainer key={index}>{item}
        </VideoContainer>;
          })}
          </RowVideoContainer>
        ); 
       });

       return<MainVideoContainer>{grids}</MainVideoContainer>;
 }

export default Videos;