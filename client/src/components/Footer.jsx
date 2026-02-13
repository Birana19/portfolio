import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Biranalini Mahinthan. All rights reserved.</p>

        <div className="footer-links">
          <a href="https://github.com/Birana19" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/biranalini-mahinthan-b8273a312/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
