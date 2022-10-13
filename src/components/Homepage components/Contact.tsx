import contact from '../../img/contact.png'
function Contact() {
  return (
    <div className="contact">
      <img src={contact} alt="" className="contact-img" />
      <div className="content">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <p>Subscribe to get 10% Discount and promotion</p>
        <div className="input-wrap">
          <input type="text" placeholder="Email address" />
          <div className="signup-btn">
            <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
