import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/ProductListPage components/Sidebar";
import ProductList from "../components/ProductListPage components/ProductList";
function ProductListPage() {
  return (
    <div className="wrapper product-list-page">
      <Header></Header>
      <div className="d-flex">
        <Sidebar></Sidebar>
        <div className="content">
          <ProductList></ProductList>
          <div class="more-btn">load more</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ProductListPage;
