import React, { useRef } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaTelegram } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';

import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p399odh', 'template_7ficl2r', form.current, 'wVc4VMEDhXpBXKv58');
        e.target.reset();
    };
    return (
        <section className="contact section" id="contact">
            <h2 className="contact__title_main">Get in touch</h2>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Contact with me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="contact__card-icon">
                                <MdOutlineMailOutline />
                            </i>
                            <h3 className="contact__card-title">Email</h3>

                            <span className="contact__card-data">shpinev13@mail.ru</span>

                            <a
                                href="mailto:shpinev13@mail.ru"
                                className="contact__button"
                                target="_blank">
                                Write me
                                <i className="contact__button-icon">
                                    <IoIosArrowRoundForward />
                                </i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="contact__card-icon">
                                <FaTelegram />
                            </i>
                            <h3 className="contact__card-title">Telegram</h3>
                            <span className="contact__card-data">+79026795653</span>

                            <a
                                href="https://t.me/wiithmeee"
                                className="contact__button"
                                target="_blank">
                                Write me
                                <i className="contact__button-icon">
                                    <IoIosArrowRoundForward />
                                </i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write to me if you have any job offers</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Name"
                            />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Email"
                            />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag"></label>
                            <textarea
                                name="offers"
                                id=""
                                cols="30"
                                rows="10"
                                className="contact__form-input"></textarea>
                        </div>
                        <button className="button button--flex" style={{ cursor: 'pointer' }}>
                            Send a message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
