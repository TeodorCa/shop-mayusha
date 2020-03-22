import React, { Children } from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        cartProducts: state.cartProducts
    }
}

function Cart(props) {
    const {cartProducts} = props;

    return(
    <div>
        <Layout>
                 <div className="d-flex">
                    <h2 className="w-50">Nume produs</h2>
                    <h2 className="w-50">Pret produs</h2>
                </div>
                {
                    cartProducts.map((cartProduct) => {
                        return(
                        
                            <div className="d-flex">
                                <p className="w-50">{cartProduct.name}</p>
                                <p className="w-50">{cartProduct.price}</p>
                                <p className="w-50">{cartProduct.currency}</p>
                            </div>
                        )
                    })
                }
        </Layout>
    </div>
    )
}

export default connect(mapStateToProps)(Cart);