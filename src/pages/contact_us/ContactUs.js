import React from 'react';
import './ContactUs.css';

function ContactUs(){
    return(
        <div className='contact-us'>
            <header className='contact-us-header'>
                <h1>Contact us</h1>
                <p>Willekeurige Contact Us Page!!! met fictief gegevens</p>
            </header>
            <div className='contact-us-container'>
                <div className='contact-us-left'>
                    <section>
                        <i className="fa fa-map-marker fa-2x" aria-hidden="true" />
                        <h2>Adres</h2>
                        <p>
                            Mathenesserweg 78b <br />
                            3078 HG Rotterdam<br />
                            Zuid-Holland
                        </p>
                    </section>
                    <section>
                        <i className="fa fa-phone fa-2x" aria-hidden="true" />
                        <h2>Telefoon nummer</h2>
                        <p>06-1234567</p>
                    </section>
                    <section>
                        <i className="fa fa-envelope fa-2x" aria-hidden="true" />
                        <h2>E-mail</h2>
                        <p>onbekend@gmail.com</p>
                    </section>

                </div>
                <div className='contact-us-right'>
                    <form>
                        <div className="form">
                            <div className="right">

                                <div className="contact-form">
                                    <input type="text" required />
                                    <span className='placeholder'>Full Name</span>
                                </div>

                                <div className="contact-form">
                                    <input type="E-mail" required />
                                    <span className='placeholder'>E-mail Id</span>
                                </div>

                                <div className="contact-form">
                                    <textarea name="text"> </textarea>
                                    <span className='placeholder'> Type your Message....</span>
                                </div>

                                <div className="contact-form">
                                    <input type="submit" name="submit" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="media">
                        <li><i className="fa fa-facebook-square fa-2x" aria-hidden="true" /></li>
                        <li><i className="fa fa-instagram fa-2x" aria-hidden="true" /></li>
                        <li><i className="fa fa-whatsapp fa-2x" aria-hidden="true" /></li>
                        <li><i className="fa fa-twitter-square fa-2x" aria-hidden="true" /></li>
                    </div>
                </div>
            </div>
            <div className="empty">
            </div>
        </div>
    )
}

export default ContactUs;

