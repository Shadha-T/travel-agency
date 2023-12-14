import './Main.css'
import img1 from '../../assets/img(1).jpg'
import img2 from '../../assets/img(2).jpg'
import img3 from '../../assets/img(3).jpg'
import img4 from '../../assets/img(4).jpg'
import img5 from '../../assets/img(5).jpg'
import img6 from '../../assets/img(6).jpg'
import img7 from '../../assets/img(7).jpg'
import img8 from '../../assets/img(8).jpg'
import img9 from '../../assets/img(9).jpg'
import { ImLocation2 } from "react-icons/im";
import { LuClipboardList } from "react-icons/lu";
import Aos from'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function Main(){


    

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    const Data=[
        {
        id:1,
        imgSrc : img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of Romance, Bora Bora is one of the best traveldestinationin the World. This place is known for its Luxuriousstays and adventrous activities. '
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: "Huayna Picchu is a mountain in Peru,rising over Machu Pucchu, the so-called Lost city of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular. "
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'. Always interesting to be in this place.  "
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'According to the World Tourism Ranking, 45 million people visit turkey each year, and form that about 2 million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities. '
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'A city in central Mexico. Guanajuato is known for its history of silver mining and colonial architecture. The house in the city are very attractively painted with the most bright color available. Always Welcome. '
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food. '
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Angkot wat represent the entire range of khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities. '
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'An immense mausoleum of white marbel, built-in agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali is an indonesian island and one of the best holiday destination in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art and culture, food, temples and beautiful sandy beaches. '
  },
]
    
    return(
        <>
        <section className='main container section'>
            <div className='secTitle'>
                <h3 data-aos="fade-right"className='title'>
                    Most visited Destination
                </h3>
            </div>
            <div className='secContent grid'>
                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                        return(
                        <div key={id} data-aos="fade-Up" className='singleDestination'>
                            <div className='imageDiv'>
                                <img src={imgSrc} alt={destTitle}/>
            
                            </div> 
                            <div className='cardInfo'>
                                <h4 className='desTitle'>{destTitle}</h4>
                                <span className='continent flex'>
                                <ImLocation2  className='icon'/>
                                <span className='name'>{location}</span>

                                </span>
                                <div className='fees flex'>
                                    <div className='grade'>
                                        <span>{grade}<small className='small1'>+1</small></span>
                                    </div>
                                    <div className='price'>
                                        <h5>{fees}</h5>
                                    </div>

                                </div>
                                <div className='desc'>
                                    <p>{description}</p>
                                </div>
                                <button className='btn flex'>
                                    Details<LuClipboardList  className='icon'/>
                                </button>

                            
                            </div>
                            </div>    
                


                        )
                    })
                }

            </div>
        </section>
        </>
    )
}
export default Main;