
import '../App.css';  // Import the CSS file for the footer
import   myResume from '../assets/Resume.pdf'

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-details">
            <h2>Bhuwan Bhashkar</h2>
            <p>Frontend Developer</p>
            <p>Email: nigamrai666.com</p>
            <p>Phone: +91 9973426843</p>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/nigamrai666" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/nigamrai666/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={myResume} className="footer-link" download>
              Download Resume
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
