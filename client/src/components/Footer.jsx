import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-10">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p>© {new Date().getFullYear()} Starling. All rights reserved.</p>

        <div className="flex justify-center gap-6 text-gray-400">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-blue-500 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
