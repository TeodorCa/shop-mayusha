import React from 'react';
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
        <Layout>
            <div className="container-fluid container-min-max-width d-flex flex-column justify-content-start align-items-center">
                <div className="w-100">   
                    <div className="d-flex justify-content-start text-center h4 border-bottom align-items-center">
                        <h3 className="w-50 border-right">Nume produs</h3>
                        <h3 className="w-50">Pret produs</h3>
                    </div> 
                    <br/>
                    {
                        cartProducts.map((cartProduct) => {
                            return(
                                <div className="d-flex justify-content-start align-items-center text-center">
                                    <p className="w-50 h6">{cartProduct.name}</p>
                                    <p className="w-50">{cartProduct.price} {cartProduct.currency}</p>
                                </div>
                            )
                        })
                    }
                </div> 
            </div>
        </Layout>
    )
}

export default connect(mapStateToProps)(Cart);