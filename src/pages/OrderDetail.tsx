import Header from "../components/Header";
import Footer from "../components/Footer";
import pd1 from '../img/pd1.png'
import {Link} from 'react-router-dom'
function OrderDetail() {
  return (
    <div className="wrapper order-detail">
      <Header></Header>
      <div class="back-btn container">
        <i class="fa-solid fa-chevron-left"></i>
        <p>Order Details</p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <Link to='/order'>

            <div class="detail">
              <img src={pd1} alt="" />
              <div class="info">
                <h2>Ice-cream Sundae</h2>
                <span> 1 bowl </span>
                <p class="id">#2536373</p>
                <p>Quantity: 20</p>
                <p class="price">$20</p>
                <p class="status">Status Pending</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="payment-info">
              <h2>Payment Information</h2>

              <div class="body">
                <div class="info-wrap">
                  <h3>Payment Method</h3>
                  <div class="d-flex info-row">
                    <p>Mpesa</p>
                    <p>Paybill</p>
                  </div>
                  <div class="d-flex info-row">
                    <p>Phone Number</p>
                    <p>+254316778689</p>
                  </div>
                </div>
              </div>

              <div class="footer">
                <div class="info-wrap">
                  <h3>Payment Information</h3>
                  <div class="info-row d-flex">
                    <p>Order Total</p>
                    <p>$200</p>
                  </div>
                  <div class="info-row d-flex">
                    <p>Delivery Fee</p>
                    <p>$20</p>
                  </div>
                  <div class="info-row d-flex">
                    <p>Total Fee</p>
                    <p>$220</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="payment-info">
              <h2>Delivery Information</h2>
              <div class="info-wrap">
                <h3>Delivery at your address</h3>
                <p>Mabruk Apartments</p>
                <p>Waudo street,Eastleigh</p>
                <p>Nairobi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default OrderDetail;
