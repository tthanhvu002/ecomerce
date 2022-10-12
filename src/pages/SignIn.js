import Header from "../components/Header";
import {Link} from 'react-router-dom'
function SignIn() {
  return (
    <div className="wrapper signin">
      <Header></Header>
      <div class="form-wrap container">
        <div class="row justify-content-center">
          <div class="col-lg-6 left">
            <h2 class="heading">Sign In</h2>
            <div class="create-wrap">
              <p>New User?</p>
              <a href="./signup.html">Create account</a>
            </div>
            <div class="input-wrap">
              <p>Your Phone Number*</p>
              <input type="text" placeholder="+254" />
            </div>
            <div class="input-wrap">
              <p>Enter password*</p>
              <input type="text" placeholder="Enter password" />
            </div>

            <div class="forgot">
              <Link to="/forget">Forgot password?</Link>
            </div>
            <div class="checkbox-group">
              <input type="checkbox" />
              <p>I agree to terms & conditions</p>
            </div>
            <div class="sign-btn">Sign In</div>
          </div>
          <div class="col-lg-6 right">
            <h2>Create Account</h2>
            <p>Create account to manage orders</p>
            <div class="sign-btn">Create Account</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
