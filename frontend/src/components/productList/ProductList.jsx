import React from "react";
import { useDispatch } from "react-redux";
import styles from './ProductList.module.css';
import { addToCart } from "../../redux/features/cart/cartSlice";
import {useNavigate} from 'react-router-dom'

export const ProductList = ({data,isLoading,isError}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const addHandler=(item)=>{
    dispatch(addToCart(item))
    navigate('/cart')
  }
  return (
      <div className={styles.home_container}>
        {isLoading ? (
          <h1>Loading....</h1>
        ) : isError ? (
          <h1>Error Occured</h1>
        ) : (
          <>
            <h2>New Arrivals</h2>
            <div className={styles.products}>
              {data?.map((item) => {
                const { id, name, desc, price, image } = item;
                return (
                  <div key={id} className={styles.product}>
                    <h3>{name}</h3>
                    <img src={image} alt={name} />
                    <div className={styles.details}>
                      <span>{desc}</span>
                      <span className={styles.price}>₹{price}</span>
                    </div>
                    <button className={styles.btn} onClick={()=>addHandler(item)}>Add To Cart</button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
  );
};
