import React from 'react';
import './Services.css'
import heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';
import Card from '../Card/Card';
import GhayaDerbali from './GhayaDerbali.pdf'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'


const Services =() =>{
    const transition={duration: 3,type:'spring'}
    const transition2={duration: 2,type:'spring'}

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return(

        <div className="services" id='Services'> 
            {/*left side*/}
            <div className='awesome'>
                <span style={{color: darkMode? 'white':''}}>My Awesome</span>
                <span>services</span>
                <spane>
                as an aspiring web and mobile developer,<br/> I've been learning through
                    <br/>
                    each project to keep on evolving <br/>and enhancing my services in these fields
                </spane>
                <a href={GhayaDerbali} download>
                <button className=" button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background:'#ABF1FF94',}}></div>
            </div>
            {/*right side*/}
            <div className='cards'>

                <motion.div
                
                initial={{left:'25rem'}}
                whileInView={{left:'14rem'}}
                transition={transition}
               
                style={{left:'14rem'}}>

                   <Card
                        emoji={heartemoji}
                        heading={'Design'}
                        detail={"Adobe Photoshop"}/>
                    
                </motion.div>



                <motion.div 
                
                initial={{left:'25rem'}}
                whileInView={{left:'-4rem'}}
                transition={transition}
                style={{top:'12rem',left:'-4rem'}}>
                   <Card
                        emoji={Glasses}
                        heading={'Web Developer'}
                        detail={"Html ,Css, JavaScript,php, Reactjs"}/>
                    
                </motion.div>

                <motion.div 
                
                initial={{left:'25rem'}}
                whileInView={{left:'14rem'}}
                transition2={transition2}
                style={{top:'19rem',left:'12rem'}}>
                   <Card
                        emoji={humble}
                        heading={'Mobile Developer'}
                        detail={"Dart ,Flutter, firebase"}/>
                    
                </motion.div>
                <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
            </div>
            
           
        </div>
        
    )
}
export default Services