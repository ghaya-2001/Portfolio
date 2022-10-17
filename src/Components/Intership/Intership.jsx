 import React from 'react';


import Nowadev from '../../img/Nowadev.jpg';
import TL from '../../img/TL.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import './Intership.css'
import {motion} from 'framer-motion'
const Intership =() =>{
    
    
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return(
        
        <div className="intership" id='Portfolio'>
            {/*left side*/}
           
            <div className='awesome'>
                
                <span style={{color: darkMode? 'white':''}}>All the Interships</span>
                <span>Sagemcom</span>
                <spane>
                I had the pleasure of having my first internship  
                    <br/>
                at a major company like Sagemcom, which lasted two months.
                    <br/>
                In this intership i've dealt with:
                <br/>
                    <br/>
                    -Developing a module allowing the extraction of data <br/>
                    from log files via CVI and the GUI<br/>
                    -Learning the CVI environment with C language<br/>
                    -Testing and implementing the module on the test <br/>and integration line
                    <br/>-Following and understanding the CMS card production process
              </spane>
              <span className='awesome'>Nowadev</span>
              <spane className='awesome1'>
                I had the pleasure of having my second internship  
                    <br/>
                at Nowadev, which lasted two months.
                    <br/>
                In this intership i've dealt with:
                <br/>
                    <br/>
                    -integration into the Nowadev team<br/>
                    
                    -Learning React.js Hooks <br/>
                    -Learning NoSQL database creation,integrationand administration with MongoDB<br/>and integration line
                    <br/>-Learning Backend development with Node.js+ Express.js<br/>
                    -Creating a website using MERN stack(MongoDB,Express,React,Node)
                    
              </spane>
                

                <button className=" button s-button">Hire me</button>
                
                <div className="blur s-blur1" style={{background:'#ABF1FF94',}}></div>
            </div>
             
            
          {/*right sid*/}
         <div className="w-right">   
            <motion.div
             initial={{rotate:45}}
             whileInView={{rotate:-360}}
             viewport={{margin:'-40px'}}
             transition={{duration:3.5 ,type:'spring'}}
            className="w-cic">
                
            <div className="w-secCircle">
                <img src={Nowadev} alt=''/>
            </div>
            
            <div className="w-secCircle">
                <img src={TL} alt=''/>
            </div>
    
            <div className="w-secCircle">
                        </div>

           { /*background circle*/}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
        </motion.div>
        </div>
       
        </div>
        
        
        
        
    )
}
export default Intership