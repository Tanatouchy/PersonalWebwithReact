import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState,useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'


const Contact = ()=> {
    const [letterClass,setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
   useEffect(()=>{
    let timeoutId = setTimeout(()=>{
        setLetterClass('text-animate-hover')
    },3000)
    return ()=>{
        clearTimeout(timeoutId)
    }
   },[])

   const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_fpmfl49', 'template_zghgbrq', refForm.current, 'iIghSHOAIzgi14UyT')
        .then(
            ()=>{
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            ()=>{
                alert('Failed to send the message, please try again')
            }
        )
   }
    
    return (
    <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                This website was created for my own learning about front-end development using Reactjs, 
                which I followed Slobodan Gajic's Youtube channel. At Present I find the Job about Javascript,Reactjs,Nodejs 
                I have no exprerience in path of developer but I think I can practice and i can do it .You alway contact me.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text'name='name'placeholder='Name'required/>
                            </li>
                            <li className='half'>
                                <input 
                                type='email'
                                name='email'
                                placeholder='Email'
                                required/>
                            </li>
                            <li>
                                <input 
                                type='text'
                                name='subject'
                                placeholder='Subject'
                                required/>
                            </li>
                            <li>
                                <textarea
                                type='text'
                                name='message'
                                placeholder='Message'
                                required>
                                </textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>

                </div>

            </div>
            <div className='info-map'>
                Tanakit Tanayapong,<br/>
                Thailand, <br/>
                Sukhumwit 113 Road Somrong Nuea 10270<br/>
                Samutprakarn<br/>
                <span>tanakit.touch@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[13.6495155,100.5976963]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[13.6495155,100.5976963]}>
                        <Popup>Tanakit lives here ,He is lonely please hire me :) </Popup>

                    </Marker>
                </MapContainer>
                
            </div>
        </div>
        <Loader type='pacman'/>
    </>)
}

export default Contact