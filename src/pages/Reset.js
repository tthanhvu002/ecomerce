import Header from "../components/Header";
import {Link} from 'react-router-dom'
function Reset() {
  return (
    <div className="wrapper pass">
      <Header></Header>
      <div class="form-wrap container">
        <h2>Reset Password</h2>
        <p class="text">
          Enter your email address and we will send futher instructions on how
          to reset the password
        </p>

        <div class="form-container">
          <div class="input-wrap">
            <p>Enter email address*</p>
            <input type="text" placeholder="Enter email" />
          </div>
          <div class="sign-btn">
            <Link to='/setpass'>Reset Password</Link>
          </div>
        </div>

        <p class="term-text">Term of Use. Privacy Policy</p>
      </div>
    </div>
  );
}

export default Reset;
