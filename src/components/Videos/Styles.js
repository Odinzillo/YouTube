import styled from "styled-components";

export const MainVideoContainer =styled.div`
   background-color: blue;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   color: white;
   width: 100%;
   height: 100%; 
`;

export const RowVideoContainer =styled.div`
   background-color: blue;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   color: white;
   width: 100%;
   height: 50%; 
   margin-left: 50px;
`;

export const SubVideoContainer =styled.div`
   background-color: green;
   height: 90%;
   width: 50%;
   margin-right: 75px;
`;

export const VideoContainer = styled(SubVideoContainer)`

`;

