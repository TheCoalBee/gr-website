import Heading from "./components/misc/Heading";

function ContactInfo() {
  return (
    <section id="contact-info">
      <h1>Get in touch</h1>
      <div id="contact-points">
        <p><i className="fa-solid fa-phone fa-fw"></i>(951) 440-6119</p>
        <p><i className="fa-solid fa-location-dot fa-fw"></i>32147 Dunlap Blvd # B <br /> Yucaipa, CA</p>
        <p><i className="fa-solid fa-envelope fa-fw"></i>info@grconstructors.com</p>
        <p><i className="fa-solid fa-clock"></i>
          <span>
            Monday: 7:00am - 3:00pm<br />
            Tuesday: 7:00am - 3:00pm<br />
            Wednesday: 7:00am - 3:00pm<br />
            Thursday: 7:00am - 3:00pm<br />
            Friday: 7:00am - 3:00pm<br />
            Saturday: Closed<br />
            Sunday: Closed<br />
            </span>
        </p>
      </div>
    </section>  
  )
}

import { useRef, useState } from "react";

function ContactForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [invalid, setInvalid] = useState({ name: false, email: false, message: false });
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleValidate = () => {
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();
    return {
      name: !name,
      email: !email || !validateEmail(email),
      message: !message
    };
  };

  const handleBlur = (field) => {
    if (!submitted) return;
    const validity = handleValidate();
    setInvalid((prev) => ({ ...prev, [field]: validity[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const newInvalid = handleValidate();
    setInvalid(newInvalid);
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();
    if (newInvalid.name || newInvalid.email || newInvalid.message) return;
    const subject = encodeURIComponent('Inquiry for G&R Constructors');
    const body = encodeURIComponent(message);
    window.location.href = `mailto:info@grconstructors.com?subject=${subject}&body=${body}`;
  };

  const inputStyle = (field) => ({
    border: '2px solid transparent',
    ...(submitted && invalid[field] && { borderColor: 'red' })
  });

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div>
        <h1>Send Us a Message</h1>
        <p>Fill in the form below and get in touch with our team!</p>
      </div>
      <input
        placeholder="Name"
        name="name"
        type="text"
        ref={nameRef}
        style={inputStyle('name')}
        onBlur={() => handleBlur('name')}
      />
      <input
        placeholder="E-mail"
        name="email"
        type="email"
        ref={emailRef}
        style={inputStyle('email')}
        onBlur={() => handleBlur('email')}
      />
      <textarea
        rows="5"
        placeholder="Enter your message here..."
        name="message"
        ref={messageRef}
        style={inputStyle('message')}
        onBlur={() => handleBlur('message')}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function Contact({imgUrl}) {
  return (
    <main id="contact-us">
        <img loading="lazy" className="background" src={imgUrl}></img>

        <Heading title={"Contact Us"} content={"Let’s start building together. Reach out to our team today and discover how G&R Constructors can bring your vision to life."}/>

        <div className="contact-info">
          <ContactInfo />

          <ContactForm />
        </div>

    </main>
  );
}

export default Contact;