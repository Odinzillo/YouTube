import React from "react";
import { MainPanelContainer, ColumnPanelContainer, SubPanelContainer } from "./Styles";

function Panel() {

  const initialData = [
    "cuadro1",
    "cuadro2",
    "cuadro3"
  ];
  const matrix =() => {
    let chuncks =[];
    for (let i=0; i< initialData.length; i+=3) {
        chuncks.push(initialData.slice(i,i+3));
    }
      return chuncks;
    };

    const grids =matrix().map((column,index) => {
      return (
        <ColumnPanelContainer key={index}>
          {column.map((item,index) => {
             return<SubPanelContainer key={index}>{item}
        </SubPanelContainer>;
          })}
          </ColumnPanelContainer>
        ); 
       });

       return<MainPanelContainer>{grids}</MainPanelContainer>;
 }

export default Panel;