import React from 'react';
import './Footer.css'
import wave from '../../img/wave.png';
const Footer =() =>{
    return(
        <div className="footer">
            <img src={wave} alt='' style={{width:'100%'}}/>
            <div className="f-content">
                <span>Ghayaderbali20@gmail.com</span>
            </div>
        </div>

      
        
    )
}
export default Footer