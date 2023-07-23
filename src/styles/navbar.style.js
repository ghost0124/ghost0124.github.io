import styled from "styled-components";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 90px;
    background-color: radial-gradient(at top, rgb(2, 78, 43) 1%, rgb(0, 14, 3) 100%);
    display: flex;
    flex-direction: column;
`;

export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: flex-start;
    padding-left: 35%;
    background-color: black
`;

export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    align-items: flex-end;
    padding-left: 5%;
    background-color: black
`;

export const MyLogo = styled.img`
    max-height: 150px;
    max-width: 350px;
    height: auto;
`;
    

