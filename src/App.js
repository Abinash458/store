import React, { Component, useEffect } from "react";
// import { ThemeProvider } from "styled-components";
// import { useSelector, useDispatch, connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

// import lightTheme from "./theme/Light";
// import darkTheme from "./theme/Dark";
// import Container from "./theme/components/Container";
// import {
//   darkModeAction,
//   handleDetail,
//   addToCart,
// } from "./redux/actions/config_action";

import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default/Default";

import { storeProducts, detailProduct } from "./shared/data";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  //   const dispatch = useDispatch();
  //   const config = useSelector((state) => state.config);
  //   useEffect(() => {
  //     if (!config.darkMode) {
  //       dispatch(darkModeAction(window.localStorage.getItem("theme")));
  //     }
  //   }, [config.darkMode, dispatch]);

  //   const themeChange = (value) => {
  //     window.localStorage.setItem("theme", value);
  //     dispatch(darkModeAction(value));
  //   };

  state = {
    products: storeProducts,
    productDetail: detailProduct,
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { productDetail: product };
    });
  };

  addToCart = (id) => {
    console.log(`Item is Added to cart id:`, id);
  };

  render() {
    return (
      //   <ThemeProvider theme={config.darkMode === "dark" ? darkTheme : lightTheme}>
      // {/* <Container> */}
      <React.Fragment>
        <Navbar
        // themeChange={themeChange}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <ProductList
                handleDetail={this.handleDetail}
                products={this.state.products}
                addToCart={this.addToCart}
              />
            )}
          />
          <Route
            path="/details"
            component={() => (
              <ProductDetails productDetail={this.state.productDetail} />
            )}
          />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
      // {/* </Container> */}
      //   </ThemeProvider>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     products: state.productReducer.products,
//     detailProducts: state.detailProductReducer.detailedProduct,
//   };
// };

// export default withRouter(connect(mapStateToProps)(App));
export default App;
