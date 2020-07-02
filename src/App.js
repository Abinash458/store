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
import Modal from "./components/Customised Components/Modal";

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
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
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
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return {
        products: tempProducts,
        cart: [...this.state.cart, product],
      };
    });
  };

  openModal = (id) => {
    const products = this.getItem(id);
    this.setState(() => {
      return { modalProduct: products, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
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
                products={this.state.products}
                handleDetail={this.handleDetail}
                addToCart={this.addToCart}
                openModal={this.openModal}
              />
            )}
          />
          <Route
            path="/details"
            component={() => (
              <ProductDetails
                productDetail={this.state.productDetail}
                openModal={this.openModal}
                addToCart={this.addToCart}
              />
            )}
          />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal
          openModal={this.openModal}
          closeModal={this.closeModal}
          modalOpen={this.state.modalOpen}
          modalProduct={this.state.modalProduct}
        />
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
