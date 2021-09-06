import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import './Header.css';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { 
        numberOfProducts: state.cartProducts.length };
  };

function Header (props) {
    console.log(props);
    const {user, signOut, numberOfProducts} = props;
    return(

        <header className="header container-fluid mb-4 border-bottom d-flex justify-content-between align-items-center">
            <Link to="/" className="my-3">
                <img src={Logo} alt="logo"/>
            </Link>
            <div className="d-flex align-items-end">
                { user
                    ? <div>
                        <p className="h5">Salut, {user.displayName}</p>
                        <button className="btn btn-outline-dark h5" onClick={signOut}>
                            Sign Out
                        </button>
                      </div>
                    : <Link to="/login" className="h5">Sign In</Link>
                }
                {/* <Link to="/login">Logare</Link> */}
                <div className="d-flex align-items-center">
                    <Link to="/cart">
                        <ShoppingCart />
                    </Link>
                    <p className="ml-1">{numberOfProducts}</p>
                </div>
            </div>
        </header>
    )


}

export default connect(mapStateToProps)(Header);