import pd1 from '../../img/pd1.png'
import pd2 from '../../img/pd2.png'
import pd3 from '../../img/pd3.png'
import pd4 from '../../img/pd4.png'
import cart from '../../img/cart.svg'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

function Suggest() {
  return (
    <div class="suggest">
      <div class="section-heading container">
        <h2>Products you may like</h2>
        <div class="btn-wrap">
          <div class="prev-btn">
          <BsChevronLeft></BsChevronLeft>
          </div>
          <div class="next-btn">
          <BsChevronRight></BsChevronRight>
          </div>
        </div>
      </div>
      <div class="product-list row container">
        <div class="col-lg-3">
          <div class="item">
            <img src={pd1} alt="" />
            <p>Ice Cream Sundae</p>
            <p>$20</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="amount">
                <div class="decrease">-</div>
                <input type="text" placeholder="1" />
                <div class="increase">+</div>
              </div>
              <img src={cart} alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="item">
            <img src={pd2} alt="" />
            <p>Ice Cream Sundae</p>
            <p>$20</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="amount">
                <div class="decrease">-</div>
                <input type="text" placeholder="1" />
                <div class="increase">+</div>
              </div>
              <img src={cart} alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="item">
            <img src={pd3} alt="" />
            <p>Ice Cream Sundae</p>
            <p>$20</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="amount">
                <div class="decrease">-</div>
                <input type="text" placeholder="1" />
                <div class="increase">+</div>
              </div>
              <img src={cart} alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="item">
            <img src={pd4} alt="" />
            <p>Ice Cream Sundae</p>
            <p>$20</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="amount">
                <div class="decrease">-</div>
                <input type="text" placeholder="1" />
                <div class="increase">+</div>
              </div>
              <img src={cart} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suggest;
