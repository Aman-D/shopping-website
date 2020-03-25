import React from 'react';

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cartDropDown.component";

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (

    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/shop">Contact</Link>
            {
                currentUser ? <div className="option" onClick={() => auth.signOut()}>Sign Out</div> :
                    <Link className="option" to="/signin">Sign In</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? '' : <CartDropDown />
        }
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})



export default connect(mapStateToProps)(Header);