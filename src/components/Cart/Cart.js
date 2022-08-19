import "./Cart.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, clearCart, totalPrecio, totalProductos } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <h2 className="cart-vacio">
        Elige tu Morral Ideal <br />
       <Link to="/">Inicio</Link>
      </h2>
    );
  }
  return (
    <div>
      <h2 className="cart-head-title">Bolso-Carrito</h2>
      <div className="cart-container">
        <div className="cart-itemContainer">
          <ItemCart />
        </div>
        <div className="cart-controls">
    
          <h3 className="cart-global">Total: {totalPrecio()} </h3>
          <h3 className="cart-global">
            Total: {totalProductos()} productos
          </h3>
          <button className="cart-btn btn-controls">
            <Link to="/">Seguir eligiendo</Link>
          </button>
          <button className="cart-btn btn-controls">
            <Link to="/Checkout">Confirmar compra</Link>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
