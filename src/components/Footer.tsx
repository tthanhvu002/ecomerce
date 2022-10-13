import footerLogo from '../img/footer-logo.png'
function Footer() {
    return ( 
        <footer className="footer">
      <div className="d-flex justify-content-between">
        <div className="footer-link">
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Email Marketing</a></li>
            <li><a href="#">Campaigns</a></li>
            <li><a href="#">Branding</a></li>
            <li><a href="#">Offline</a></li>
          </ul>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Benefits</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-logo">
            <img src={footerLogo} alt="" />
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center" style={{marginTop: '128px'}}>
        <div className="term-wrap">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
        </div>
        <div className="social">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </footer>
    );
}

export default Footer;