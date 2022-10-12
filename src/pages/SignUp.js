import Header from "../components/Header";
import {Link} from 'react-router-dom'
function SignUp() {


    return ( 
        <div className="wrapper signin">
            <Header></Header>
            <div class="form-wrap container">
            <div class="row justify-content-center">
                <div class="col-lg-6 left">
                    <h2 class="heading" style={{marginBottom: '65px'}}>Sign In</h2>
                    <div class="input-wrap">
                        <p>Your Fullname*</p>
                        <input type="text" placeholder="Enter your fullname" />
                    </div>
                    <div class="input-wrap">
                        <p>Your Phone Number*</p>
                        <input type="text" placeholder="+254" />
                    </div>
                    <div class="input-wrap">
                        <p>Enter password*</p>
                        <input type="text" placeholder="Enter password" />
                    </div>
                    <div class="input-wrap">
                        <p>Email</p>
                        <input type="text" placeholder="Enter email address" />
                    </div>
                    


                    <div class="forgot">
                        <Link to='/forget'>
                            Forgot password?
                        </Link>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" />
                        <p>I agree to terms & conditions</p>
                    </div>
                    <div class="sign-btn">
                        Sign Up
                    </div>
                </div>
                <div class="col-lg-6 right">
                    <h2>Sign In</h2>
                    <p>Login to manage order</p>
                    <div class="sign-btn">
                        Login
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}

export default SignUp;