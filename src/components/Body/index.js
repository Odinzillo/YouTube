import React from "react";
import {MainContainer} from "./Styles";
import OptionBar from "../OptionBar";
import Videos from "../Videos";

function Body() {
  return(
        <MainContainer>
          <OptionBar/>
          <Videos/>
        </MainContainer>
  )
}

export default Body;
