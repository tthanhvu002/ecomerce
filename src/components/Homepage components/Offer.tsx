import of1 from '../../img/of1.png'
import of2 from '../../img/of2.png'
import of3 from '../../img/of3.png'
import of4 from '../../img/of4.png'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'



function Offer() {
  return (
    <section className="offer container">
      <div className="section-heading container">
        <h2>Offers</h2>
        <div className="btn-wrap">
          <div className="prev-btn">
          <BsChevronLeft></BsChevronLeft>
          </div>
          <div className="next-btn">
          <BsChevronRight></BsChevronRight>
          </div>
        </div>
      </div>
      <div className="list row">
        <div className="col-lg-3">
          <div className="item">
            <img src={of1} alt="" />
            <h2>Cottage Cheese</h2>
            <p className="weight">3 kg</p>
            <p className="sale-price">$100</p>
            <p className="price">$150</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="item">
            <img src={of2} alt="" />
            <h2>Cottage Cheese</h2>
            <p className="weight">3 kg</p>
            <p className="sale-price">$100</p>
            <p className="price">$150</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="item">
            <img src={of3} alt="" />
            <h2>Cottage Cheese</h2>
            <p className="weight">3 kg</p>
            <p className="sale-price">$100</p>
            <p className="price">$150</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="item">
            <img src={of4} alt="" />
            <h2>Cottage Cheese</h2>
            <p className="weight">3 kg</p>
            <p className="sale-price">$100</p>
            <p className="price">$150</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
