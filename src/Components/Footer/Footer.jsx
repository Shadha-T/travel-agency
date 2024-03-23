import './Footer.css'
// import { FiSend } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import video3 from '../../assets/video3.mp4'

import { MdTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function Footer(){


    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return(
        <>
        <section className='footer'>
            <div className='videoDiv'>
                <video src={video3} loop autoplay muted type="video/mp4"></video>
            </div>
            <div className='setContent container'>
                <div className='contactDiv flex'>
                    <div  data-aos="fadeUp" className='text'>
                        <small>KEEP IN TOUCH</small>
                        <h2 className='pp'>Travel with us</h2>
                    </div>
                    <div className='inputDiv flex'>
                        <input data-aos="fadeUp"  type='text' placeholder='enter email address'/>
                        <button data-aos="fadeUp"   className='btn flex' type='submit'>
                   Send    < IoIosSend className='icon'/>
                        </button>
                    </div>

                </div>
                <div className='footerCard flex'>
                    <div className='footerIntro flex'>
                       <div className='logoDiv'>
                        <a href='#' className='logo flex'>
                        <MdTravelExplore className='icon'/>Travel.
                        </a>
                        </div> 
                        <div data-aos="fadeUp"  className='footerParagraph'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repudiandae,
                             quo pariatur dicta, dolorum consectetur, veritatis alias
                             itaque temporibus excepturi obcaecati quisquam id culpa labore delectus quas ducimus est esse?

                        </div>
                       <div data-aos="fadeUp"  className='footerSocials'>
                       <FaTwitter className='icon'/>
                       <FaYoutube className='icon'/>
                       <FaFacebook className='icon'/>
                        </div> 
                    </div>
                    <div className='footerLinks grid'>
                        <div data-aos="fadeUp"  data-aos-duration="3000"  className='linkGroup'>
                            <span className='groupTtile'>
                                OUR AGENCY
                            </span>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                            Services
                            </li>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                          Insurance
                            </li>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                        Agency
                            </li>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                       Tourism
                            </li>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                      Payment
                            </li>
                        </div>



                        <div data-aos="fadeUp"  data-aos-duration="4000"className='linkGroup'>
                            <span className='groupTtile'>
                                PARTNERS
                            </span>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                          Bookings
                            </li>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                          Rentcars
                            </li>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                      Hostelworld
                            </li>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                       Trivago
                            </li>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                      TripAdvisor
                            </li>
                        </div>




                        <div data-aos="fadeUp"  data-aos-duration="5000" className='linkGroup'>
                            <span className='groupTtile'>
                                LAST MINUTE
                            </span>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                        SWitzerland
                            </li>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                         London
                            </li>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                       Italy
                            </li>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                     California
                            </li>
                            <li className='footerList flex'>
                            <FiChevronRight className='icon'/>
                   Maldives
                            </li>
                        </div>
                    </div>

                    <div className='footerDiv'>
                      <small>BEST TRAVEL WEBSITE</small> 
                      <small>COPYRIGHTS RESERVED 2023</small> 
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}
export default Footer;