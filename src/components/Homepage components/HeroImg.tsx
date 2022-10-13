import blob from '../../img/blob.png'
import heroImg1 from '../../img/hero-img-1.png'
import heroImg2 from '../../img/hero-img-2.png'

function HeroImg() {
  return (
    <section className="hero-img">
      <div className="content">
        <h3>Lorem ipsum dolor sit</h3>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <div className="signup-btn">sign up</div>
      </div>
      <div className="blob">
        <img src={blob} alt="" />
      </div>
      <div className="img-wrap">
        <img className="tl" src={heroImg1} alt="" />
        <img src={heroImg2} alt="" />
      </div>
    </section>
  );
}

export default HeroImg;
