import React from 'react';
const CartItem=(props)=>{

    
        const {price,title,qty}=props.product;
      return (
        <div className="cart-item">
          <div className="left-block">
            <img alt="your pic" style={styles.image} src={props.product.img} />
          </div>
          <div className="right-block">
            <div style={ { fontSize: 25 } }>{title}</div>
            <div style={ { color: '#777' } }>RS {price}</div>
            <div style={ { color: '#777' } }>QTY: {qty}</div>
            <div className="cart-item-actions">
                <img alt="increase"  onClick={()=>props.onIncreaseQuantity(props.product)} className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1641376809~hmac=d5c2fefc9ffac1828667728afd96f130"
               />
                <img alt="decrease" onClick={()=>props.onDecreaseQuantity(props.product)} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                <img alt="delete" onClick={()=>props.handleDelete(props.product.id)} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"></img>
            </div>
          </div>
        </div>
      );
    
  }
  
  const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
  }
  
  export default CartItem;