import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css'
import {Link} from 'react-scroll'
const Navbar =() =>{
    return(

        <div className="n-wrapper"> 
             <div className="n-left">
                <div className="name">Ghaya   
                
                </div>
                <Toggle/>
                
             </div>

             <div className="n-right">
                 <div className="n-List">
                 <ul style={{ListStyleType: 'none'}}>
                     <Link spy={true} to='Navbar'  smooth={true} activeClass='activeClass'>

                     <li>Home</li>
                     </Link>
                     <Link spy={true} to='Services'  smooth={true} activeClass='activeClass'> <li>Services</li></Link>
                    
                     <Link spy={true} to='Languages'  smooth={true} activeClass='activeClass'><li>Languages</li></Link>
                     
                     <Link spy={true} to='Portfolio'  smooth={true} activeClass='activeClass'><li>Portfolio</li></Link>
                     
                     <Link spy={true} to='Portfolio'  smooth={true} activeClass='activeClass'><li>Testimonial</li></Link>
                     
                 </ul>
             </div>
                <button className="button n-button" >Contact</button>
             </div>

        </div>
        
    )
}
export default Navbar