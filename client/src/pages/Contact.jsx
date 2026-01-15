import ContactForm from "../components/ContactForm";
import "./Contact.css";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="heading-lg text-center">Contact Me</h2>

      <div className="contact-grid">
        {/* Left Side */}
        <div className="contact-info">
          <h3 className="heading-md">Get in Touch</h3>

          <p className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>birana1905@gmail.com</span>
          </p>

          <p className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Colombo, Western Province, Sri Lanka</span>
          </p>

          {/* Quote Box */}
          <div className="quote-box">
            <p>“Turning ideas into meaningful digital experiences.”</p>
          </div>
        </div>

        {/* Right Side */}
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
