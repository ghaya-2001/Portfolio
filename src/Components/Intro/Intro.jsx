import React from 'react';
import './Intro.css'
import Github from '../../img/github.png';
import linkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'

const Intro =() =>{

    const transition={duration: 2,type:'spring'}

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    return(
        <div className="intro">
            <div className="i-Left"> 
            
                <div className="i-name">
                    <span style={{color: darkMode? 'white' : ''}}>Hy! I Am </span><br/>   
                    <span>Ghaya Derbali <br/></span >
                    <spane>

Educational background: includes enrolling<br/> in the higher institute of computer science Mahdia,<br/> where I recently finished my second year in<br/> computer science: software engineering and data systems<br/>to start my final year next semester</spane>
   
                </div>
                <button className="button i-button" >Hire me</button>
                <div className='i-icons'>
                    <a href=''><img src={linkedIn} alt=''/> </a>
                    <a href='https://github.com/ghaya-2001'><img src={Github} alt=''/> </a>
                                 </div>
                      
                    
          
            </div> 
              <div className="i-right"> 
              <img src={Vector1} alt=''/>
              <img src={Vector2} alt=''/>
              <img src={boy} alt=''/>

              <motion.img 
              initial={{left:'-36%'}}
              whileInView={{left:'-24%'}}
              transition={transition}

              src={glassesimoji} alt=''/>


              <motion.div
                initial={{top:'-4%',left:'74%'}}
                whileInView={{left:'68%'}}
                transition={transition}
              style={{top:'10%',left:'60%'}}>
                  <FloatingDiv image={crown} txt1='Web' txt2='developer'/>
              </motion.div>


              <motion.div 
              initial={{top:'18rem',left:'9rem'}}
              whileInView={{left:'0rem'}}
              transition={transition}
              style={{top:'18rem',left:'0rem' ,}}>
              <FloatingDiv image={thumbup} txt1='Best Designer' txt2='Award'/>
              </motion.div>
              {/*blur divs*/}
              <div className='blur' style={{background:"rgb(238 210 255)"}}>
              <div className='blur' style={{background:"#C1F5FF",top:'17rem',width:'21rem',height:'11rem',left:'-30rem'}}>
                </div>
              </div>
              </div>
         </div>
        
        
        )
    }
    export default Intro