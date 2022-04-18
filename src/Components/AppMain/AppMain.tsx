import React, {useEffect, useState} from 'react';
import {createCongrats} from "../../Utils/CreateRandomCongrat";

import style from './style.scss'

import {Button, Col, Container, Row} from "react-bootstrap";
import AppFooter from "../AppFooter/AppFooter";

const AppMain = (props:any) => {

    const [congrats,setCongrats] = useState(createCongrats())

    // useEffect(()=>{
    //     const congrats = createCongrats()
    //     const congratsKey = congrats[0]
    //     const congratsValues = congrats[1].split(',')
    // })


    // const handleCreateCongratulation = () => {
    //
    //     const congrats = createCongrats()
    //     const congratsKey = congrats[0]
    //     const congratsValues = congrats[1].split(',')
    //
    // }

    return (
        <div className={style.mainContainer}>
            <div>
                <Container className={style.mainHeader}>
                    <Row>
                        <h1>{props.name}! {congrats[0]},</h1>
                    </Row>
                </Container>
                <div className={style.wrapperContent}>
                    <Container fluid={"sm"} className={style.content}>
                        {Array.isArray(congrats[1]) && congrats[1].map((cong)=>(
                            <Row xs="auto" className={style.mainRow}>
                                    <span>{cong}</span>
                            </Row>
                            ))}
                    </Container>
                </div>
            </div>
            <Container className={style.wrapperButton}>
                <Row>
                    <Button onClick={()=>setCongrats(createCongrats())}>Обновить</Button>
                </Row>
            </Container>
            <AppFooter></AppFooter>
        </div>
    );
};

export default AppMain;
