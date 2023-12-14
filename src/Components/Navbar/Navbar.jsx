import './Navbar.css'
import { useState } from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";



function Navbar(){
    const [active, setActive] = useState('navBar') ;
    const showNav = ()=> {
        setActive('navBar activeNavbar');
    }

    const removeNavbar=()=>{
        setActive('navBar');
    }



    return(
        <>
        <section className='navBarSection'>
<header className='header flex'>
    <div className='logoDiv'>
        <a href='#' className='logo flex'>
        <h1><MdOutlineTravelExplore />Travel.</h1>
        </a>
    </div>
    <div className={active}>
        <ul className='navList flex'>
            <li className='navItem'>
                <a href='#' className='navLink'>Home</a>
            </li>
            <li className='navItem'>
                <a href='#' className='navLink'>Package</a>
            </li>
            <li className='navItem'>
                <a href='#' className='navLink'>Shop</a>
            </li>
            <li className='navItem'>
                <a href='#' className='navLink'>About</a>
            </li>
            <li className='navItem'>
                <a href='#' className='navLink'>Pages</a>
            </li>
            <li className='navItem'>
                <a href='#' className='navLink'>News</a>
            </li>
            <li className='navItem'>
                <a href='#' className='navLink'>Contact</a>
            </li>

            <button className='btn'>
                <a href='#'>BOOK NOW</a>
            </button>
            
        </ul> 
    {/* </div> */}
    <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>
                </div>
                </div>

    <div  onClick={showNav}className='toggleNavbar'>
    <TbGridDots className='icon'/>
    </div>

</header>
        </section>
        </>
    )
}
export default Navbar;