import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
function MultiStep() {
  const [step, setStep] = useState(1);
  const step1Handle = () => {
    setStep(0);
  };
  const step2Handle = () => {
    setStep(2);
  };
  const step3Handle = () => {
    setStep(3);
  };
  useEffect(() => {});
  const list = [
    <div class="step-form container">
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

      <div class="save-btn">Save</div>
    </div>,
    <div class="step-form container">
      <h3>User Location Information </h3>
      <p class="text">Mabruk Apartments</p>
      <div class="text">Waudo street,Eastleigh </div>
      <div class="text">Nairobi </div>

      <div class="save-btn">Change</div>
    </div>,
    <div class="step-form container">
      <div class="row">
        <div class="col-lg-7">
          <div class="payment-method">
            <h2>Payment Method</h2>
            <div class="radio-wrap">
              <div class="radio-input">
                <input type="radio" id="r1" />
                <label for="r1" class="active"></label>
              </div>
              <p>Mpesa</p>
            </div>
            <div class="radio-wrap">
              <div class="radio-input">
                <input type="radio" id="r2" />
                <label for="r2"></label>
              </div>
              <p>Cash on Delivery</p>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="summary">
            <h2>Order Summary</h2>
            <div class="body">
              <div class="info">
                <p>Sub Total</p>
                <p>$600</p>
              </div>
              <div class="info">
                <p>Delivery Fee</p>
                <p>$20</p>
              </div>
            </div>
            <div class="footer">
              <div class="info">
                <p>total</p>
                <p>$620</p>
              </div>
              <div class="checkout-btn">checkout</div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ];
  return (
    <div className="wrapper step">
      <Header></Header>
      <div class="multi-step-wrap">
        <ul class="multi-step container">
          <li class="step step-1 active" onClick={step1Handle}>
            <div class="step-dot"></div>
          </li>
          <li className={step > 1 ? "active line" : "line"}></li>
          <li
            className={step > 1 ? "active step" : "step"}
            onClick={step2Handle}
          >
            <div class="step-dot"></div>
          </li>
          <li className={step > 2 ? "active line" : "line"}></li>

          <li
            className={step > 2 ? "active step" : "step"}
            onClick={step3Handle}
          >
            <div class="step-dot"></div>
          </li>
        </ul>
        <ul class="multi-step-content container">
          <li>Account Info</li>
          <li>Delivery Information</li>
          <li>Payment</li>
        </ul>
        {list[step-1]}
      </div>

      <Footer></Footer>
    </div>
  );
}

export default MultiStep;
