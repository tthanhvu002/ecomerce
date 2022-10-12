import Footer from "../components/Footer";
import Header from "../components/Header";
import Suggest from "../components/Cart components/Suggest";
import BackBtn from "../components/BackBtn";
import CartWrap from "../components/Cart components/CartWrap";
function Cart() {
    return ( 
        <div className="wrapper cart">
            <Header></Header>
            <BackBtn>Cart</BackBtn>
            <CartWrap></CartWrap>
            <Suggest></Suggest>
            <Footer></Footer>
        </div>
     );
}

export default Cart;