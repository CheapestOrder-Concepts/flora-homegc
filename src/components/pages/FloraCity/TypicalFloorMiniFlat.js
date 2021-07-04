import React from 'react';

import floracity_typicalfloor from "./FloraAssets/floracity_typicalfloor.png"
import Card from './Card';
const TypicalFloorMiniFlat = () => {

    const MainMessage = () => {
        return (
            <h5 className="text-center text-light pb-4  pr-2 "> Typical Floor
                MiniFlat.</h5>
        )
    }


    return (

        <>


            <Card image={floracity_typicalfloor} MainMessage={MainMessage} headline1="Typical Floor
    MiniFlat."/>
        </>
    );
}

export default TypicalFloorMiniFlat;
