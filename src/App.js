import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Category from "./routes/category/category.component";
import CategoryDrawer from "./components/category-drawers/category-drawers.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}>
          <Route index element={<CategoryDrawer />} />
          <Route path=":category" element={<Category />} />
        </Route>
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
