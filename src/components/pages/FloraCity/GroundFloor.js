import React from 'react';

import floracity_groundfloor from "./FloraAssets/floracity_groundfloor.png"
import Card from './Card';
const GroundFloor = () => {

    const MainMessage = () =>{
return (
    <h5 className="text-center text-light pb-4  pr-2 "> Ground Floor
    Mezzanine.</h5>
)
    }

    
    return (
       
        <>
    

        <Card image={floracity_groundfloor} MainMessage={MainMessage} headline1="Ground Floor Mezzanine"/>
        </>
    );
}

export default GroundFloor;
