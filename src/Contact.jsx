/**
 * direct phone/email with icons for quick reach
 * Request a quote
 * Get in touch
 * FAQ (How to request a quote? What areas are serviced? Do you handle permits? etc)
 */

import Heading from "./components/Heading";

function ContactInfo() {
  return (
    <section id="contact-info">
      <h1>Get in touch</h1>
      <div id="contact-points">
        <p><i className="fa-solid fa-phone fa-fw"></i>(555) 555-5555</p>
        <p><i className="fa-solid fa-location-dot fa-fw"></i>XXXXX Job address, Yucapia, CA</p>
        <p><i className="fa-solid fa-envelope fa-fw"></i>contact@gnr.com</p>
      </div>
    </section>  
  )
}

function ContactForm() {
  return (
    <form id="contact-form" action="POST">
          <div>
            <h1>Send Us a Message</h1>
            <p>Fill in the form below and get in touch with our team!</p>
          </div>
            <input placeholder="Name" name="name" type="text" />

            <input placeholder="E-mail" name="email" type="email" />

            <textarea rows="5" placeholder="Enter your message here..." name="message" type="textarea" />

          <button type="button">Submit</button>
        </form>
  )
}

function Contact({imgUrl}) {
  return (
    <main id="contact-us">
        <img className="background" src={imgUrl}></img>

        <Heading title={"Contact Us"} content={"Let’s start building together. Reach out to our team today and discover how G&R Constructors can bring your vision to life."}/>

        <div className="contact-info">
          <ContactInfo />

          <ContactForm />
        </div>

    </main>
  );
}

export default Contact;