import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from "https://cdn.skypack.dev/react-tabs@3.2.2";
import icon from "../../img/warn.png";
import compliance from "../../img/compliance.png";
import OrderList from "./OrderList";
import order3Img from "../../img/order-3-img.png";
function OrderTabs() {
  const closedOrder = false;
  const noOpenOrder = (
    <>
      <div class="no-product-img">
        <img src={order3Img} alt="" />
      </div>  
      <p class="text">No open orders</p>
    </>
  );
  return (
    <div class="tabs container">
      <Tabs>
        <TabList className="mt--10">
          <Tab>Open Orders</Tab>
          <Tab>Closed Order</Tab>
        </TabList>
        <TabPanel>
          {" "}
          <OrderList></OrderList>{" "}
        </TabPanel>
        <TabPanel>
          {closedOrder === false ? (
            <>
              <div class="no-product-img">
                <img src={icon} class="icon" alt="" />
                <img src={compliance} alt="" />
              </div>
              <p class="text">No closed orders</p>
            </>
          ) : (
            ""
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default OrderTabs;
