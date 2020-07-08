import React, { Component, useEffect } from "react";
import { ThemeProvider } from "styled-components";
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
import CommentModal from "./components/Comment/CommentModal";

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
    products: [],
    productDetail: detailProduct,
    cart: [],
    modalOpen: false,
    commentModal: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return {
        products: tempProducts,
      };
    });
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
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
        };
      },
      () => {
        this.addTotals();
      }
    );
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

  // Cart Functions

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const seletedItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(seletedItem);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const seletedItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(seletedItem);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProducts = tempProducts[index];
    removedProducts.inCart = false;
    removedProducts.count = 0;
    removedProducts.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.08;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  // Comment Functions

  openComment = () => {
    this.setState(() => {
      return { commentModal: true };
    });
  };

  closeComment = () => {
    this.setState(() => {
      return { commentModal: false };
    });
  };

  handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log("Submited");
    this.closeComment();
  };

  render() {
    return (
      // <ThemeProvider
      //   theme={config.darkMode === "dark" ? darkTheme : lightTheme}
      // >
      //   <Container>
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
                openComment={this.openComment}
                closeComment={this.closeComment}
              />
            )}
          />
          <Route
            path="/cart"
            component={() => (
              <Cart
                cart={this.state.cart}
                cartSubTotal={this.state.cartSubTotal}
                cartTax={this.state.cartTax}
                cartTotal={this.state.cartTotal}
                increment={this.increment}
                decrement={this.decrement}
                clearCart={this.clearCart}
                removeItem={this.removeItem}
              />
            )}
          />
          <Route component={Default} />
        </Switch>
        <Modal
          openModal={this.openModal}
          closeModal={this.closeModal}
          modalOpen={this.state.modalOpen}
          modalProduct={this.state.modalProduct}
        />
        <CommentModal
          commentModal={this.state.commentModal}
          openComment={this.openComment}
          closeComment={this.closeComment}
          handleCommentSubmit={this.handleCommentSubmit}
        />
      </React.Fragment>
      // {/* </Container>
      // </ThemeProvider> */}
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
