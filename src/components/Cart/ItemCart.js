import "./Cart.css";
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ItemCart = () => {
  const { cart, removeItem } = useContext(CartContext);
  return (
    <div>
      {cart.map((prod) => (
        <div className="cart-item" key={prod.id}>
          <img className="cart-img" src={prod.imageid} alt={prod.title} />
          <div className="cart-body">
            <h2 className="cart-titulo">{prod.title}</h2>
            <p className="cart-descripcion">
               ${prod.price}.
            </p>
            <p className="cart-descripcion">
               {prod.cantidad} 
            </p>
            <p className="cart-total">
                total: $ {prod.price * prod.cantidad}.
            
            </p>
          </div>
          <button className="cart-btn" onClick={() => removeItem(prod.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemCart;
