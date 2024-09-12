import Header from "./components/Header";
import Body from "./components/Body/index.js";
import {  BodyContainer, MainContainer } from "./components/Styled/MainScreen.js";
import MenuSection from "./components/MenuSection/index.js";

function App() {
  return (
    <MainContainer>
      <Header/>
      <BodyContainer>
        <MenuSection/>
        <Body/>
      </BodyContainer>
    </MainContainer>

  );
}

export default App;
