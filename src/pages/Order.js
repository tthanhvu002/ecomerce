import Header from "../components/Header";
import Footer from "../components/Footer";
import BackBtn from "../components/BackBtn";
import OrderTabs from "../components/Order components/OrderTabs";
function Order({data}) {
    return ( 
        <div className="wrapper order-1 order-2 order-3">
            <Header></Header>
            <BackBtn>
                Order
            </BackBtn>
            <OrderTabs></OrderTabs>
            <Footer></Footer>
        </div>
    );
}

export default Order;