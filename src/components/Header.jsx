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
            <Link to="/">
                <img src={Logo} alt="logo"/>
            </Link>
            <div>
                { user
                    ? <div>
                        <p>Salut, {user.displayName}</p>
                        <button className="btn btn-outline-dark" onClick={signOut}>
                            Sign Out
                        </button>
                      </div>
                    : <Link to="/login">Logare</Link>
                }
                {/* <Link to="/login">Logare</Link> */}
                <Link to="/cart">
                    <ShoppingCart />
                </Link>
                
                <p className="ml-1">{numberOfProducts}</p>
            </div>
        </header>
    )


}

export default connect(mapStateToProps)(Header);