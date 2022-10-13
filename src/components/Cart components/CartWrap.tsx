import {Link} from 'react-router-dom'

function CartWrap() {
    return ( <div class="cart-wrap container">
    <div class="row">
      <div class="col-lg-7">
        <ul class="cart-list">
          <div class="cart-item">
            <img src="./img/pd1.png" alt="" />
            <div class="info">
              <h2>Ice-cream Sundae</h2>
              <span>1 bowl</span>
            </div>
            <div class="amount">
              <div class="decrease">-</div>
              <input type="text" placeholder="1" />
              <div class="increase">+</div>
            </div>
            <div class="price-wrap">
              <p>price</p>
              <p>$200</p>
            </div>
            <div class="del-btn">
              <i class="fa-solid fa-trash"></i>
            </div>
          </div>
          <div class="cart-item">
            <img src="./img/pd1.png" alt="" />
            <div class="info">
              <h2>Ice-cream Sundae</h2>
              <span>1 bowl</span>
            </div>
            <div class="amount">
              <div class="decrease">-</div>
              <input type="text" placeholder="1" />
              <div class="increase">+</div>
            </div>
            <div class="price-wrap">
              <p>price</p>
              <p>$200</p>
            </div>
            <div class="del-btn">
              <i class="fa-solid fa-trash"></i>
            </div>
          </div>
          <div class="cart-item">
            <img src="./img/pd1.png" alt="" />
            <div class="info">
              <h2>Ice-cream Sundae</h2>
              <span>1 bowl</span>
            </div>
            <div class="amount">
              <div class="decrease">-</div>
              <input type="text" placeholder="1" />
              <div class="increase">+</div>
            </div>
            <div class="price-wrap">
              <p>price</p>
              <p>$200</p>
            </div>
            <div class="del-btn">
              <i class="fa-solid fa-trash"></i>
            </div>
          </div>
        </ul>
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
            <div class="checkout-btn">
              <Link to='/step'>Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> );
}

export default CartWrap;