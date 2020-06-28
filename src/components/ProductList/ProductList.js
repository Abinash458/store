import React, { Component } from 'react';
import Product from '../Product/Product';
import Title from '../Customised Components/Title';

class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            {
                                this.props.products.map(product => {
                                    return <Product key={product.id} product={product} />;
                                })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductList;