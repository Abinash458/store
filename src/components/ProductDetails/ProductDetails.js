import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Customised Components/Button";

class ProductDetails extends Component {


  renderComments(comments) {
    if (comments == null) {
      return (<div></div>)
    }
    const cmnts = comments.map(comment => {
      return (
        <li key={comment.id}>
          <h4 className="text-slanted">{comment.comment}</h4>
          <p className="text-muted">-- {comment.author},
          &nbsp;
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
          }).format(new Date(comment.date))}
          </p>
        </li>
      )
    })
    return (
      <div>
        <h2 className='py-4 text-blue'>All Comments Here</h2>
        <ul className='list-unstyled'>
          {cmnts}
        </ul>
      </div>
    )
  }

  render() {
    const {
      id,
      company,
      img,
      price,
      info,
      title,
      inCart,
      comments,
    } = this.props.productDetail;
    const commentItem = this.renderComments(comments)
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
          {commentItem}
        </div>
      </div>
    );
  }
}

export default ProductDetails;
