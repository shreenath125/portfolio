/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import profileimage from '.././assets/profile_img.jpg';
import {
    BsGithub,
    BsPerson
} from "react-icons/bs";
import {
    GrLinkedinOption
} from "react-icons/gr";
import { AiOutlineHome,} from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import {FaBrain} from 'react-icons/fa';

function Header() {
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const listItems = document.querySelectorAll('#headerlist li');
        window.addEventListener('scroll',()=>{
            let current = '';
            sections.forEach((section)=>{
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                // console.log(sectionTop);
                if(window.pageYOffset>=(sectionTop-sectionHeight/3)){
                    current= section.getAttribute('id');
                }
            })
            // console.log(current);
            listItems.forEach((item)=>{
                item.classList.remove('active');
                if(item.classList.contains(current)){
                    item.classList.add('active')
                }
            })
        })
    })

    const handleClick = (e, id) => {
        const element = document.getElementById(id);
        // const sectionTop = element.offsetTop;
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        // element.scrollTo(0,sectionTop-60)
        if(window.screen.width<=992){
            document.getElementById('header').style.display='none';
        }
        
    }

    return (
        <header id="header">
            <div className='d-flex flex-column'>
                <div className='profile'>
                    <img src={profileimage} alt='loading....' className="rounded-circle img-fluid" style={{width: 200,height: 200}}/>
                    <h1 class="text-light"><a href="">Shreenath Asati</a></h1>
                    <div class="social-links mt-3 text-center">
                        <a href="https://www.linkedin.com/in/shreenath-asati-37703b1b0/" className="linkedin"><GrLinkedinOption /></a>
                        <a href="https://github.com/shreenath125" className="github"><BsGithub style={{ fontSize: '25px' }} /></a>
                    </div>
                </div>
                <nav class="nav-menu">
                    {/* <div style={{background:'#040b14'}}> */}
                    <ul id='headerlist' >
                        <li className='active headbtn hero' onClick={(e) => { handleClick(e, 'hero') }}><i><AiOutlineHome /></i><span> Home</span></li>
                        <li className='headbtn about' onClick={(e) => { handleClick(e, 'about') }}><i><BsPerson /></i> <span> About</span></li>
                        <li className='headbtn skills' onClick={(e) => { handleClick(e, 'skills') }}><i><FaBrain /></i> <span> Skills</span></li>
                        <li className='headbtn projects' onClick={(e) => { handleClick(e, 'projects') }}><i><MdOutlineDesignServices /></i><span>Projects</span></li>
                        <li className='headbtn resume' ><a href="https://drive.google.com/file/d/1EHjklLqgxqKnEHbOsdWpdP2GtFE4efrZ/view" style={{ textDecoration: 'none' }}><i><CgFileDocument /></i> <span> Resume</span></a></li>
                        {/* <li><a href="#portfolio"><i><BsGrid1X2 style={{fontSize:'18px'}}/></i><span>Portfolio</span></li> */}
                        <li className='headbtn contact' onClick={(e) => { handleClick(e, 'contact') }}><i><HiOutlineMail /></i><span>Contact</span></li>
                    </ul>
                    {/* </div> */}
                </nav>
            </div>

        </header>
    )
}

export default Header
