import React, { useEffect, useState } from "react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3
      m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
      c3.14-.35 6.44-1.54 6.44-7
      A5.44 5.44 0 0 0 20 4.77 
      5.07 5.07 0 0 0 19.91 1
      S18.73.65 16 2.48a13.38 13.38 
      0 0 0-7 0C6.27.65 5.09 1 
      5.09 1A5.07 5.07 0 0 0 5 4.77
      a5.44 5.44 0 0 0-1.5 3.78
      c0 5.42 3.3 6.61 6.44 7
      A3.37 3.37 0 0 0 9 18.13V22">
    </path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7
      a2 2 0 0 0-2-2 
      2 2 0 0 0-2 2v7h-4v-7
      a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 
      1.53 4.48 4.48 0 0 0-7.86 3v1
      A10.66 10.66 0 0 1 3 4s-4 9 
      5 13a11.64 11.64 0 0 1-7 2
      c9 5 20 0 20-11.5
      a4.5 4.5 0 0 0-.08-.83
      A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>

          {/* Brand / About */}
          <div className="footer-section">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text)' }}>Anuj Kumar</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              Building digital experiences with passion and precision. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text)' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#top" className="footer-link">Home</a></li>
              <li><a href="#work" className="footer-link">Projects</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text)' }}>Connect</h3>
            <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/Anujkumar9858" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/anujkumar9858/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social">
                <LinkedinIcon />
              </a>
              <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer-social">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom flex center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontSize: '0.9rem' }}>© {year} Anuj Kumar. All rights reserved.</span>
          <a href="#top" className="back-to-top" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
