import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-400 mb-3">Email: your@email.com</p>
          <p className="text-gray-400">Location: Sri Lanka</p>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
