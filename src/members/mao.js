import { Typography } from '@material-ui/core';
import React from 'react';
import mao_image from './images/Mao.png'


function Mao() {
    return (
        <div>
            <Typography>明暗真央</Typography>
            <img src={mao_image} alt="真央" style={{maxHeight:"100px"}} />
            <Typography>プログラムで作られた人工物</Typography>
        </div>
    )
}

export default Mao;