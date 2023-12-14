import './Home.css'
import video1 from '../../assets/video1.mp4'
import { CiLocationOn } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaTripadvisor } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import { CiBoxList } from "react-icons/ci";


import Aos from'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';








function Home(){
useEffect(()=>{
    Aos.init({duration: 2000})
}, [])



    return(
        <>
         <section className='home'>
      <div className="overlay"></div>
      <video src={video1} muted autoPlay loop type="video/mp4" className='video1'></video>


<div className='homeContent container'>
    <div className='textDiv'>
        <span data-aos="fade-Up"className='smallText'>
            Our Packages

        </span>
        <h1 data-aos="fade-Up" className='homeTitle'>
            Search Your Holiday
        </h1>
    </div>
    <div data-aos="fade-Up" className='cardDiv grid'>
        <div className='destinationInput'>
            <label htmlFor='city'>Search Your Destination</label>
            <div className='input flex'>
                <input type='text' placeholder='Enter name here...'/>
                <CiLocationOn  className="icon"/>
            </div>
        </div>
            <div className='dateInput'>
                <label htmlFor='date'>Select your date</label>
                <div className='input flex'>
                    <input type='date'></input>
                </div>
               
                
            </div>

            
            <div className='priceInput'>
               <div className='label_total flex'>
                <label htmlFor="price+">Max Price:</label>
                    <h3 className='total'>$5000</h3>
               </div>
               <div className='input flex'>
                <input type='range' max='5000' min='1000'/>
               </div>
            </div>
            <div className='searchOptions flex'>
            <FaFilter className='icon'/>
            <span>MORE FILTERS</span>
            </div>

        
    </div>

<div className='homeFooterIcons flex'>
    <div className='rightIcons'>
    <FaInstagram  className='icon'/>
     <CiFacebook  className='icon'/>
    <FaTripadvisor className='icon'/>

    </div>

    <div className='leftIcons'>
    <CiBoxList className='icon' />
    <TbApps className='icon'/>
        
    </div>
</div>
</div>

    </section>
        </>
    )
}
export default Home;