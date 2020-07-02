import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Customised Components/Button";

const ProductDetails = (props) => {
  const { id, company, img, price, info, title, inCart } = props.productDetail;
  return (
    <div className="container py-5">
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
        <div className="col-10 mx-auto col-md-6 my-3 no-gutters">
          <img src={img} className="img-fluid" alt="product" />
        </div>
        {/* Product Image End */}
        {/* Product Text Start */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize no-gutters">
          <h2>model: {title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by:
            <span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price: <span>$</span>
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
                props.addToCart(id);
                props.openModal(id);
              }}
            >
              {inCart ? "inCart" : "add to cart"}
            </ButtonContainer>
          </div>
        </div>
        {/* Product Text End */}
      </div>
    </div>
  );
};

export default ProductDetails;
