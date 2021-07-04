import React from 'react';

import floracity_firstfloor from "./FloraAssets/floracity_firstfloor.png"
import Card from './Card';
const FirstFloor = () => {

    const MainMessage = () =>{
return (
    <h5 className="text-center text-light pb-4  pr-2 "> First Floor
    Mezzanine.</h5>
)
    }

    
    return (
       
        <>
    

        <Card image={floracity_firstfloor} MainMessage={MainMessage} headline1="First Floor Mezzanine"/>
        </>
    );
}

export default FirstFloor;
