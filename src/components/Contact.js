import React, { useState } from 'react'
import { ImLocation } from 'react-icons/im';
import { MdEmail, MdCancel } from 'react-icons/md';
import {
    BsTelephoneFill
} from 'react-icons/bs';
import Mymap from './Mymap';

function Contact() {
    return (
        <section className='contact' id='contact'>
            <div className='container1'>
                <div className='section-title res-ml-20'>
                    <h2>Contact</h2>
                    <p>Dropping a line to say g’day, ask for my resume or see if we can build something amazing together? I’d love to hear from you!
                        However, if you have other request or question, don’t hesitate to use the form.</p>
                    <p>Fill in your info in the form below and I look forward to hearing from you!</p>    
                </div>
                <div className='row d-flex-center res-d-col' style={{ justifyContent: 'space-evenly' }}>
                    <div className=' col-lg-12 col-xl-5 d-flex-center resPadd-0'>
                        <div className='info '>
                            <div className="address row">
                                <div className='col-2'>
                                    <i><ImLocation /> </i>
                                </div>
                                <div className='col-10'>
                                    <h4>Location :</h4>
                                    <p>Asati Ward no.2, Damoh, MP 470661</p>
                                </div>
                            </div>
                            <div className="email row">
                                <div className='col-2 '>
                                    <i><MdEmail /> </i>
                                </div>
                                <div className='col-10'>
                                    <h4>Email :</h4>
                                    <p>shreenathasati01@gmail.com</p>
                                </div>
                            </div>
                            <div className='call row'>
                                <div className='col-2'>
                                    <i><BsTelephoneFill /> </i>
                                </div>
                                <div className='col-10'>
                                    <h4>Call :</h4>
                                    <p>+91 9826154640</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact


/* <div className='col-lg-12 col-xl-7 d-flex-center resPadd-0'>
                        <div className='form'>
                            {show && (<div class="alert alert-success" role="alert">
                                <span>your message sent successfully</span>
                                <MdCancel onClick={() => { setShow(false) }} style={{ fontSize: 22, cursor: 'pointer' }} />
                            </div>)}

                            <form onSubmit={(e) => { handleFormSubmit(e) }}>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="name">Your Name</label>
                                        <input type="text" value={name} name="name" class="form-control" id="name" required
                                            onChange={(e) => { setName(e.target.value) }}
                                        />
                                        <div class="validate"></div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="name">Your Email</label>
                                        <input type="email" value={email} class="form-control" name="email" id="email" required
                                            onChange={(e) => { setEmail(e.target.value) }}
                                        />
                                        <div class="validate"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name">Subject</label>
                                    <input type="text" value={subject} class="form-control" name="subject" id="subject" required
                                        onChange={(e) => { setSubject(e.target.value) }}
                                    />
                                    <div class="validate"></div>
                                </div>
                                <div class="form-group">
                                    <label for="name">Message</label>
                                    <textarea class="form-control" value={message} name="message" rows="10" required
                                        onChange={(e) => { setMessage(e.target.value) }}
                                    ></textarea>
                                    <div class="validate"></div>
                                </div>
                                <div className="text-center">
                                    <button type='submit'  >Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
*/