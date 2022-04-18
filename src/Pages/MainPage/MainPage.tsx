import React from 'react';
import AppHeader from "../../Components/AppHeader/AppHeader";
import AppMain from "../../Components/AppMain/AppMain";
import AppFooter from "../../Components/AppFooter/AppFooter";
import {Card, Container} from "react-bootstrap";

import style from './style.scss'

const MainPage = () => {
    return (
        <>
            <AppHeader/>
            <div className={style.wrapper}>
                <AppMain name={"Алена"}/>
            </div>

        </>
    );
};

export default MainPage;
