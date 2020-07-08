import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Customised Components/Button";
import CommentModal from "../Comment/CommentModal";

class ProductDetails extends Component {
  render() {
    const {
      id,
      company,
      img,
      price,
      info,
      title,
      inCart,
    } = this.props.productDetail;
    return (
      <div className="container">
        {/* title */}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{title}</h1>
          </div>
        </div>
        {/* end title */}
        {/* Product Info */}
        <div className="row no-gutters">
          {/* Product Image */}
          <div className="col-10 mx-auto col-md-6 my-2 no-gutters">
            <img src={img} className="img-fluid" alt="product" />
          </div>
          {/* Product Image End */}
          {/* Product Text Start */}
          <div className="col-10 mx-auto col-md-6 my-2 text-capitalize no-gutters">
            <h2>model: {title}</h2>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by:
              <span className="text-uppercase">{company}</span>
            </h4>
            <h4 className="text-blue">
              <strong>
                price: <span>&#8377;</span>
                {price}
              </strong>
            </h4>
            <p className="text-capitalize mt-3 font-weight-bold mb-0">
              some info about the product:
            </p>
            <p className="text-muted lead">{info}</p>
            {/* buttons */}
            <div>
              <Link to="/">
                <ButtonContainer>back to product</ButtonContainer>
              </Link>
              <ButtonContainer
                cart
                disabled={inCart ? true : false}
                onClick={() => {
                  this.props.addToCart(id);
                  this.props.openModal(id);
                }}
              >
                {inCart ? "inCart" : "add to cart"}
              </ButtonContainer>
              <ButtonContainer onClick={() => this.props.openComment()}>
                Add Comment
              </ButtonContainer>
            </div>
          </div>
          {/* Product Text End */}
        </div>

        <div className="py-4 text-center">
          <h3 className="m-0">All Comments Here</h3>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
