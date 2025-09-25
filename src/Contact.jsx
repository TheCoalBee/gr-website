/**
 * Map of service areas, maybe function to input address and see if it is in area?
 * direct phone/email with icons for quick reach
 * Request a quote
 * Get in touch
 * FAQ (How to request a quote? What areas are serviced? Do you handle permits? etc)
 */

import Heading from "./components/Heading";

function Contact({imgUrl}) {
  return (
    <main id="contact-us">
        <img className="background" src={imgUrl}></img>

        <Heading title={"Contact Us"}/>

        <form action="POST">
          <h1>Send Us a Message</h1>
          <p>Fill in the form below and get in touch with our team!</p>

          <label htmlFor="name">
            Name
            <input placeholder="John Smith" name="name" type="text" />
          </label>

          <label htmlFor="email">
            E-mail
            <input placeholder="johnsmith@gmail.com" name="email" type="email" />
          </label>

          <label htmlFor="message">
            Message
            <textarea rows="5" placeholder="How can I get my free quote?" name="message" type="textarea" />
          </label>

          <button type="button">Submit</button>
        </form>
    </main>
  );
}

export default Contact;