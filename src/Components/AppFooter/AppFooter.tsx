import React from 'react';
import {Image} from "react-bootstrap";

import style from './style.scss'

const AppFooter = () => {
    return (
        <div className={style.footerWrapper}>
                <img src={'./footer.jpg' }></img>
        </div>
    );
};

export default AppFooter;
