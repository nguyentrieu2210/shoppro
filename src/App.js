import { BrowserRouter, Link, Routes, Route, RouterProvider } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { getCategories } from "./services/Api";
import { Provider } from "react-redux";
import store from "./redux-setup/store";

//Import Shared
import Header from "./shared/components/Layout/Header";
import Slider from "./shared/components/Layout/Slider";
import Menu from "./shared/components/Layout/Menu";
import Sidebar from "./shared/components/Layout/Sidebar";
import Footer from "./shared/components/Layout/Footer";

//Import Page
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Success from "./pages/Success";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  const [categories, setCategories] = React.useState([]);
  useEffect(() => {
    getCategories({
      // params: {
      //   limit:6,
      // }
    }).then(({ data }) => setCategories(data.data.docs));
  }, []);
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <div>
          <Header />
          {/*	Body	*/}
          <div id="body">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <Menu categories={categories} />
                </div>
              </div>
              <div className="row">
                <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                  <Slider />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Category-:id" element={<Category />} />
                    <Route path="/Search" element={<Search />} />
                    <Route path="/Success" element={<Success />} />
                    <Route path="/ProductDetails-:id" element={<ProductDetails />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
                <div id="sidebar" className="col-lg-4 col-md-12 col-sm-12">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
          {/*	End Body	*/}
          <Footer />
        </div>
      </BrowserRouter>
      </Provider>
  )
}
export default App;