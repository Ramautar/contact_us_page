import React from 'react';
import './ContactUs.css';

function ContactUs(){
    return(
        <div className="container">
            <header>
                <h1>Contact Us</h1>
                <p>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Nam totam iure vitae nesciunt quaerat sed, et ullam placeat ut?
                    Impedit dolorem nostrum itaque molestias nemo delectus animi fuga illum
                    magnam earum pariatur reiciendis, explicabo id velit facilis,
                    necessitatibus cum! Magnam.
                </p>
            </header>
            <div className="content">
                <div className="content-form">
                    <section>
                        <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                        <h2>address</h2>
                        <p>
                            Lorem ipsum dolor sit. <br />
                            Lorem, ipsum dolor. <br />
                            lorem
                        </p>
                    </section>

                    <section>
                        <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                        <h2>Phone</h2>
                        <p>123-456-78901548</p>
                    </section>

                    <section>
                        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                        <h2>E-mail</h2>
                        <p>dghdgqd@temporary.net</p>
                    </section>
                </div>
            </div>

            <form>
                <div className="form">
                    <div className="right">
                        <div className="contact-form">
                            <input type="text" required />
                            <span>Full Name</span>
                        </div>

                        <div className="contact-form">
                            <input type="E-mail" required />
                            <span>E-mail Id</span>
                        </div>
                        <div className="contact-form">
                            <textarea name="text">
                            </textarea>
                            <span> Type your Message....</span>
                        </div>

                        <div className="contact-form">
                            <input type="submit" name="submit" />
                        </div>
                    </div>
                </div>
            </form>
            <div className="media">
                <li><i className="fa fa-facebook-square fa-2x" aria-hidden="true"> </i></li>
                <li><i className="fa fa-instagram fa-2x" aria-hidden="true"> </i></li>
                <li><i className="fa fa-whatsapp fa-2x" aria-hidden="true"> </i></li>
                <li><i className="fa fa-twitter-square fa-2x" aria-hidden="true"> </i></li>
            </div>
            <div className="empty">
            </div>
        </div>
      )
}

export default ContactUs;
