import "./Contact.css";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_boibqvr",
                "template_xi2bzlt",
                form.current,
                "kbzr_FuBNT4ReEfGY"
            )
            .then(
                (result) => {

                    form.current.reset();

                },
                (error) => {

                    console.error(error.text);
                }
            );
    };
    return (
        <div className="about">

            <div className="about_left">


                <img src="/PHOTO-2025-10-29-21-17-22.jpg" alt="pic" />

            </div>

            <div className="about_right">
                <h1 style={{ fontSize: "90px" }}>Get in touch</h1>
                <p>
                    Whether you are looking for a project collaboration or just
                </p>
                <p>want to say hi,
                    feel free to reach out!</p>

                <div className="contact_info">
                    <div className="contact_form">
                        <h1>Contact Me</h1>
                        <p>Try to reach out!</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="user_name" placeholder="Your Name" required />
                            <input type="email" name="user_email" placeholder="Your Email" required />
                            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                </div>


            </div>
        </div>
    );
}