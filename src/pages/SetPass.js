import Header from "../components/Header";
function SetPass() {
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
            <p>New password*</p>
            <input type="text" placeholder="Enter new password" />
          </div>
          <div class="input-wrap">
            <p>Confirm password*</p>
            <input type="text" placeholder="Enter your new confirm password" />
          </div>
          <div class="sign-btn">Login</div>
        </div>

        <p class="term-text">Term of Use. Privacy Policy</p>
      </div>
    </div>
  );
}

export default SetPass;
