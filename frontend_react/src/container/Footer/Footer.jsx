import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import { useTheme } from '../../context/theme-Context.js';

const Footer = () => {
  const {theme} = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className={`head-text__${theme}`}>Contact</h2>

      <div className={`app__footer-cards__${theme}`}>
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:divyareddy0205@gmail.com" className={`p-text__${theme}`}>divyareddy0205@gmail.com</a>
        </div>
      </div>
      {/* {!isFormSubmitted ? (
        <div className={`app__footer-form__${theme} app__flex`}>
          <div className="app__flex">
            <input className={`p-text__${theme}`} type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className={`p-text__${theme}`} type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className={`p-text__${theme}`}
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className={`p-text__${theme}`} onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className={`head-text__${theme}`}>
            Thank you for getting in touch!
          </h3>
        </div>
      )} */}

      {/* Copyright */}
      <div className={`copyright__${theme}`}>
        <p className={`p-text__${theme}`}>Developed with Passion</p>
          <a className={`p-text__${theme}`} href="https://www.linkedin.com/in/reddy-divya-58025a12b/" target='_blank' rel="noreferrer">
            <b>Reddy Divya</b>
          </a>
    </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);
