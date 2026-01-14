import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "projects", "contact"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 90;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["home", "about", "projects", "contact"];

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">Birana</div>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={(e) => handleClick(e, link)}
                className={`nav-link ${active === link ? "active" : ""}`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
