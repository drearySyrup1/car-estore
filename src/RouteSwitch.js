import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Home from "./Home";
import ProductDetails from "./components/ProductDetails";
import Error from "./components/Error";
export const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
