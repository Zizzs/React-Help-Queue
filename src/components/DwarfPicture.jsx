import React from 'react';
import thickDorf from '../assets/images/dwarf.jpg';

function DwarfPicture(){
    let dorfPic = {
        width: 100,
        height: 150
    }
    return (
    <div>
        <img style={dorfPic} src={thickDorf}/>
    </div>
    );
}

export default DwarfPicture;