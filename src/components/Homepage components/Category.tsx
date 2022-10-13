import beve from '../../img/beverage 1.svg'
import milk from '../../img/milk 1.svg'
import meat from '../../img/meat 1.svg'
import seasoning from '../../img/seasoning 1.svg'
import station from '../../img/stationery 1.svg'
import cosmetics from '../../img/cosmetics 1.svg'
function Category() {
  return (
    <section className="category container">
      <h2>Categories</h2>

      <div className="list row g-4">
        <div className="col-lg-2">
          <div className="item">
            <img src={beve} alt="" />
            <p>beverage</p>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="item">
            <img src={milk} alt="" />
            <p>Dairy</p>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="item">
            <img src={meat} alt="" />
            <p>Meat</p>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="item">
            <img src={seasoning} alt="" />
            <p>Spices & Herbs</p>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="item">
            <img src={station} alt="" />
            <p>Stationery</p>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="item">
            <img src={cosmetics} alt="" />
            <p>Cosmetics</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
