import React,{useEffect, useState} from 'react'
import Typewriter from 'typewriter-effect';
import {HiMenu} from 'react-icons/hi';
import {ImCancelCircle} from 'react-icons/im';
import {AiOutlineUpCircle} from  'react-icons/ai';
import 'animate.css';

function Hero() {
    const [show,setShow] = useState(true);
    const [showNavbar,setShowNavbar] = useState(false);
    const [showToTopButton,setShowToTopButton] = useState(false);
    const handleScroll=()=>{
        if(window.screen.width<=992&&window.scrollY>=100){
            setShowNavbar(true);
            setShowToTopButton(true);
        }else{
            setShowNavbar(false);
            if(window.scrollY>=100){
                setShowToTopButton(true)
            }else{
                setShowToTopButton(false)
            }
        }
        if((window.screen.width<=992)&&(document.getElementById('header').style.display==='none')){
            setShow(true);
        }
    }
    
    const goToTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});  
    }
    
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, true);
        // setWidth(window.screen.width);
    })
    return (
        <>
            <section id="hero" class="d-flex flex-column justify-content-center align-items-center" >
                
                <div className={showNavbar?'MobileNavbar backgroundBlack':'MobileNavbar'}>
                    <div className='nav-item '>
                        {showNavbar?
                        <span>SHREENATH</span>:<span></span>}
                    </div>
                    <div  className='nav-item menueButton'>
                        {show?<HiMenu style={{fontSize:30 ,cursor:'pointer' }} onClick={()=>{document.getElementById('header').style.display='flex';setShow(!show)}}/>
                                :
                            <ImCancelCircle style={{fontSize:30,cursor:'pointer'}} onClick={()=>{document.getElementById('header').style.display='none';setShow(!show)}}/>
                        }
                    </div>
                </div>
                <div class="hero-container" onScroll={()=>{handleScroll()}} data-aos="fade-in">
                    <h1>Shreenath Asati</h1>
                    <p><label><Typewriter 
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={
                            (typer)=>{

                                typer.typeString("Software Developer")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("competitive coder")
                                .start()
                            }}
                    /></label></p>
                </div>
                {showToTopButton&&(<div className='goToTop animate__animated animate__bounce animate__slower animate__infinite' onClick={()=>{goToTop()}}>
                    <AiOutlineUpCircle/>
                </div>)}
                
            </section>
        </>
    )
}

export default Hero
