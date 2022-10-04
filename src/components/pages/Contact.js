import React from "react";
import Header from "../Header";
import Footer from "../Footer.js";
import classes from "./Contact.module.css";

function Contact() {
  return (
    <div>
      <Header></Header>
      <form
        className={classes.formParent}
        action="https://formsubmit.co/dtNakhutsrishvili@gmail.com"
        method="POST"
      >
        <input
          placeholder="Name"
          className={classes.name}
          type="text"
          name="name"
          required
        />
        <input
          placeholder="Your Email"
          className={classes.email}
          type="email"
          name="email"
          required
        />
        <input
          placeholder="Your Text"
          className={classes.text}
          type="text"
          name="text"
          required
        />

        <button className={classes.btnSend} type="submit">
          Send
        </button>
        <a className={classes.phone} href="tel:+995-555-55-03-41">
          Call : +995-555-55-03-41
        </a>
        <a href="email:Dtnakhutsrishvili@gmail.com" className={classes.phone}>
          Email : Dtnakhutsrishvili@gmail.com
        </a>
      </form>

      <Footer></Footer>
    </div>
  );
}

export default Contact;
