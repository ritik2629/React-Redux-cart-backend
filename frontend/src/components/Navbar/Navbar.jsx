import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';

export const Navbar = () => {
    const data = useSelector(state=>state.cart.cartItems)
    // console.log(data)
    return (
        <nav className={styles.nav_bar}>
            <Link to="/">
                <h2>Ritik Ecom</h2>
            </Link>
            <Link to="/cart"><div className={styles.nav_bag}>
                <MdShoppingCart />
                {(data.length>0)?<span className={styles.bag_qty}>
                    <span>{data.length}</span>
                </span>:null}
            </div></Link>
        </nav>
    )
}
