import pd1 from '../../img/pd1.png'
import pd2 from '../../img/pd2.png'
import pd3 from '../../img/pd3.png'
import pd4 from '../../img/pd4.png'
import cart from '../../img/cart.svg'


function BestSeller() {
    return ( 
        <div className="best-seller">
        <div className="section-heading container">
          <h2>Best Selling Products</h2>
          <div className="btn-wrap">
            <div className="prev-btn">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="next-btn">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="product-list row container">
          <div className="col-lg-3">
            <div className="item">
              <img src={pd1} alt="" />
              <p>Ice Cream Sundae</p>
              <p>$20</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="amount">
                  <div className="decrease">-</div>
                  <input type="text" placeholder="1" />
                  <div className="increase">+</div>
                </div>
                <img src="./img/cart.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item">
              <img src={pd2} alt="" />
              <p>Ice Cream Sundae</p>
              <p>$20</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="amount">
                  <div className="decrease">-</div>
                  <input type="text" placeholder="1" />
                  <div className="increase">+</div>
                </div>
                <img src={cart} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item">
              <img src={pd3} alt="" />
              <p>Ice Cream Sundae</p>
              <p>$20</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="amount">
                  <div className="decrease">-</div>
                  <input type="text" placeholder="1" />
                  <div className="increase">+</div>
                </div>
                <img src={cart} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item">
              <img src={pd4} alt="" />
              <p>Ice Cream Sundae</p>
              <p>$20</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="amount">
                  <div className="decrease">-</div>
                  <input type="text" placeholder="1" />
                  <div className="increase">+</div>
                </div>
                <img src={cart} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}

export default BestSeller
