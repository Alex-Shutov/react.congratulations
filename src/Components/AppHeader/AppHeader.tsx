import React from 'react';
import {Container, Navbar} from "react-bootstrap";

const AppHeader = () => {

    const NavProperties : React.CSSProperties ={
        backgroundColor:"#59f07e",
        boxShadow: "0 0 20px 0 rgba(0,0,0,0.5)"

    }
    return (
        <Navbar collapseOnSelect expand={"lg"} bg = {"blue"} style={NavProperties} variant={"light"}>
            <Container fluid={"xxl"}>
                <Navbar.Brand>Поздравок от типчиков</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default AppHeader;
