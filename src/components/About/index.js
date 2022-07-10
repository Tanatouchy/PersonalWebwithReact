import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About= ()=>{
    const [letterClass,setLetterClass] = useState('text-animate')
    
   useEffect(()=>{
    let timeoutId = setTimeout(()=>{
        setLetterClass('text-animate-hover')
    },3000)
    return ()=>{
        clearTimeout(timeoutId)
    }
   },[])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}/>
                </h1>
                <p>Hello everyone My name is Tanakit Tanayapong ,You can call me Touch.
                   I just a man who interest about coding and create web application
                </p>
                <p>I graduated in petrochemical engineer it not related on IT career path.
                    However I Have passion in IT and programing .It challenge me to find method to solve
                    some problem that make me do it joyfully.
                </p>
                <p>Some time the problem hard to solve , I want to ask specialist (Google) or my friend.
                  Now,my skill so novice in this career but I alway try to learn.
                  I'm familiar with basically Javascript,Reactjs,Nodejs,mysql,mongodb 
                </p>

            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                   <div className='face1'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                   </div>
                   <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                   </div>
                   <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                   </div>
                   <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                   </div>
                   <div className='face5'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                   </div>
                   <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#EC4D28"/>
                   </div>
                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About