import "./App.css";
import mainImage from "./imgs/main.jpg";
import nissanGtr from "./imgs/cars/nissan-gtr.jpg";
import TopBar from "./components/TopBar";
import Cart from "./components/Cart";
import ShopListings from "./components/ShopListings";

import { useGlobalContext } from "./components/GlobalContext";
function App() {
  const { isCartOpen } = useGlobalContext();
  return (
    <>
      <TopBar />
      <div className="wrapper">
        <div className="main-img">
          <div className="main-img-text">
            <p>Ferrari Spider</p>
          </div>
          <div className="overlay"></div>
          <img src={mainImage} alt="" />
        </div>
        <ShopListings />
        {
          <Cart
            className={isCartOpen ? "show-cart" : ""}
            img={nissanGtr}
          />
        }
      </div>
    </>
  );
}

export default App;
