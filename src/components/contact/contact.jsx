import "./contact.css";
import  { useRef } from "react";
import emailjs from "@emailjs/browser";

// const Contact = () => {

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_42yxfrk", "template_w6udzaf", form.current, {
        publicKey: "I3A_ipvnT-1Y7rgGm",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="containerC">
      <div className="firstdiv">
        <p className="contactp">Get in touch</p>
        <form className="push" ref={form} onSubmit={sendEmail}>
          <label className="clabel">Name</label>
          <input className="cinput" name="hhy" /> <br /> <br />
          <label className="clabel"> Email</label>
          <input
            className="cinput"
            type="email"
            name="user_email"
          /> <br /> <br />
          <label className="clabel">Phone Number</label>
          <input className="cinput" type="number" /> <br /> <br />
          <label className="clabel"> Message</label>
          <textarea className="cinput2" name="message" />
          <br />
          <br />
          <button className="cbtn" onClick={sendEmail}>Send Message</button>
        </form>
      </div>

      <div className="cright">
        <p className="contactp2">Feel free to contact me anytime</p>
        <div className="cbox">
          <p>Email</p>
          <p>mosesfavour65@gmail.com</p>
        </div>

        <div className="cbox">
          <p>phone Number</p>
          <p>+2349029899978</p>
        </div>

        <div className="cbox">
          <p>Address</p>
          <p>Federal Capital Territory Abuja</p>
        </div>
      </div>
    </div>
  );
};

// export default Contact;
