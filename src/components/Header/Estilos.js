import styled from "styled-components";

export const HeaderContainer =styled.header`
   background-color: blue;
   min-height: 60px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   color: white;
   width: 100%;
   height: 60px; 
`;

export const HeaderSampleSubcontainer =styled.div`
   background-color: green;
   height: 100%;
   min-width: 15%;
`;

export const MenuContainer = styled(HeaderSampleSubcontainer)`

`;

export const SearchBarContainer = styled(HeaderSampleSubcontainer)`

`;
  
export const NotificationContainer = styled(HeaderSampleSubcontainer)`

`;