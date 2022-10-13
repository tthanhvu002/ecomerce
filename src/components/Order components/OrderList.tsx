import pd1 from '../../img/pd1.png'
import {Link} from 'react-router-dom'
function OrderList() {
    return ( 
        <div class="order-list container">
        <div class="order-item">
            <div class="content">
                <img src={pd1} alt="" />
                <div class="info">
                    <h2>Ice-cream Sundae</h2>
                    <span>1 bowl</span>
                    <p>$20</p>
                    <p class="price">$200</p>
                    <p>Quantity: 2</p>
                </div>
            </div>
            <div class="view-btn">
                view 
            </div>
        </div>
        <div class="order-item">
            <div class="content">
                <img src={pd1} alt="" />
                <div class="info">
                    <h2>Ice-cream Sundae</h2>
                    <span>1 bowl</span>
                    <p>$20</p>
                    <p class="price">$200</p>
                    <p>Quantity: 2</p>
                </div>
            </div>
            <div class="view-btn">
                view details
            </div>
        </div>
        <div class="order-item">
            <div class="content">
                <img src={pd1} alt="" />
                <div class="info">
                    <h2>Ice-cream Sundae</h2>
                    <span>1 bowl</span>
                    <p>$20</p>
                    <p class="price">$200</p>
                    <p>Quantity: 2</p>
                </div>
            </div>
            <div class="view-btn">
                view details
            </div>
        </div>
      </div>
     );
}

export default OrderList;