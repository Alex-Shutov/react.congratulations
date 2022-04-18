import React from 'react';
import style from './style.scss'
import {Container, Navbar} from "react-bootstrap";

const AppHeader = () => {

    const NavProperties : React.CSSProperties ={
        backgroundColor:"#59f07e"
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
