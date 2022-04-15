import React from 'react';
import style from './style.scss'

const AppHeader = () => {
    return (
        <div className={style.headerContainer}>
            <div className={style.headerFlex}>
                <p>Поздравок <span>Алене</span> от типов</p>
            </div>
        </div>
    );
};

export default AppHeader;
