import React from 'react';
import './Language.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Languages =() =>{
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return(
        <div className="languages" id='Languages'>


            <div className="achievement" >
                <div className="circle">100%</div>
                <span>Arabic</span>
                <span>Native</span>
            </div>
            <div className="achievement">
                <div className="circle" >80%</div>
                <span>French</span>
                <span>Bilingual</span>
            </div>
            <div className="achievement">
                <div className="circle" >70%</div>
                <span>English</span>
                <span>Advanced</span>
            </div>


        </div>

       
        
    )
}
export default Languages