function Suggest() {
  return (
    <div class="suggest">
      <div class="section-heading container">
        <h2>Products you may like</h2>
        <div class="btn-wrap">
          <div class="prev-btn">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div class="next-btn">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
      <div class="product-list row container">
        <div class="col-lg-3">
          <div class="item">
            <img src="./img/pd1.png" alt="" />
            <p>Ice Cream Sundae</p>
            <p>$20</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="amount">
                <div class="decrease">-</div>
                <input type="text" placeholder="1" />
                <div class="increase">+</div>
              </div>
              <img src="./img/cart.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="item">
            <img src="./img/pd2.png" alt="" />
            <p>Ice Cream Sundae</p>
            <p>$20</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="amount">
                <div class="decrease">-</div>
                <input type="text" placeholder="1" />
                <div class="increase">+</div>
              </div>
              <img src="./img/cart.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="item">
            <img src="./img/pd3.png" alt="" />
            <p>Ice Cream Sundae</p>
            <p>$20</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="amount">
                <div class="decrease">-</div>
                <input type="text" placeholder="1" />
                <div class="increase">+</div>
              </div>
              <img src="./img/cart.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="item">
            <img src="./img/pd4.png" alt="" />
            <p>Ice Cream Sundae</p>
            <p>$20</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="amount">
                <div class="decrease">-</div>
                <input type="text" placeholder="1" />
                <div class="increase">+</div>
              </div>
              <img src="./img/cart.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suggest;
