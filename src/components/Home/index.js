import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import LogoTitle from '../../assets/images/logo_t.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import Mypic from '../../assets/images/2922.png'

const Home = ()=>{
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['a','n','a','k','i','t','t','o','u','c','h']
    const jobArray = ['J','u','n','i','o','r',' ','w','e','b','d','e','v','e','l','p','e','r']
  
   useEffect(()=>{
    let timeoutId = setTimeout(()=>{
        setLetterClass('text-animate-hover')
    },4000)
    return ()=>{
        clearTimeout(timeoutId)
    }
   },[])
    
   return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={26} />
                </h1>
                <h2>Frontend Developer/Javascript</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>

            </div>
        </div>
        
             <div className='my-pic'>
                <img src={Mypic} alt="profilepic"/>
            </div>
        <Loader type="pacman"/>
        </>
    );
}

export default Home