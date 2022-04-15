import React from 'react';
import {createCongrats} from "../../Utils/CreateRandomCongrat";

const AppMain = () => {


    const congrats = createCongrats()

    return (
        <div>
            {congrats}
        </div>
    );
};

export default AppMain;
