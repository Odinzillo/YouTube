import React from "react";
import { HeaderContainer, MenuContainer, SearchBarContainer, NotificationContainer } from "./Estilos";

function Header() {
  return(
    <HeaderContainer>
        <MenuContainer>menu</MenuContainer>
        <SearchBarContainer>search</SearchBarContainer>
        <NotificationContainer>Noti</NotificationContainer>
    </HeaderContainer>
  )

}

export default Header;