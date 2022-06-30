import React, { useEffect } from 'react'
import profile_img from '../assets/profile_img.jpg';
import { AiOutlineCaretRight } from "react-icons/ai";
import AOS from 'aos';


function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <section id="about" className='about '>
      <div className='container1'>
        <div class="section-title" >
          <h2>About</h2>
          <p>I am a <strong>Software</strong> designer, living in <strong>Damoh ,M.P.</strong><br />
            I am a final year undergraduate Information Technology student at<strong> IIIT bhopal </strong>pursuing <strong> B.Tech</strong> in <strong>computer science and engineering. </strong>
          </p>
        </div>
        <div className='row'>
          <div className='col-lg-4' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={profile_img} data-aos="zoom-in" alt="" style={{width: 300,height: 400}}/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" >
            <h3>Software developer</h3>
            <p className="font-italic">
              Excellent problem-solving skills and ability to perform well in teams. Passionate and have extensive
              experience in Competitive Programming, A Frontend developer, Software development enthusiast, eager
              to learn and adapt to different environments, and determined to accept new challenges
            </p>
            <div class="row">
              <div class="col-lg-6" data-aos="fade-left">
                <ul>
                  <li><i><AiOutlineCaretRight /></i> <strong>Birthday:</strong> 12 May 2001</li>
                  <li><i><AiOutlineCaretRight /></i> <strong>Mobile:</strong> +91 9826154640</li>
                  <li><i><AiOutlineCaretRight /></i> <strong>City:</strong> Damoh,MP</li>
                </ul>
              </div>
              <div class="col-lg-6" data-aos="fade-left">
                <ul>
                  <li><i><AiOutlineCaretRight /></i> <strong>Age:</strong> 21</li>
                  <li><i><AiOutlineCaretRight /></i> <strong>Degree:</strong> B.Tech.</li>
                  <li><i><AiOutlineCaretRight /></i> <strong>Email:</strong> shreenathasati01@gmail.com </li>
                  <li><i><AiOutlineCaretRight /></i> <strong>Work Status:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
              I’m also senior executive member of <b>Codame Club IIIT Bhopal</b> ,which is one of the flagship clubs for like minded coding enthusiasts , where I worked as a <b>problem setter</b> for their coding contests.
            </p>
            <p>
              My hobbies are playing cricket , doing competitive coding,travelling and I also fond of music and playing different instruments.
            </p>
            <p>
              I strongly believe in team spirit and working hard for your goals, i think i will be an asset to hacker kernel and will learn and gain a lot from our team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
