import "./App.css";
import mainImage from "./imgs/main.jpg";
import ShopListings from "./components/ShopListings";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "VM Motors";
  }, []);

  return (
    <>
      <div className="main-img">
        <div className="main-img-text">
          <p>Ferrari F8</p>
        </div>
        <div className="overlay"></div>
        <img src={mainImage} alt="" />
      </div>
      <ShopListings />
    </>
  );
}

export default App;
