import ContactForm from "../components/ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="heading-lg text-center">Contact Me</h2>
      <hr></hr>
      <hr></hr>

      <div className="contact-grid">
        <div>
          <h3 className="heading-md">Get in Touch</h3>
          <p className="text-muted">Email: birana1905@gmail.com</p>
          <p className="text-muted">Location: Colombo, Western Province,Sri Lanka</p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
