/* eslint-disable react-hooks/exhaustive-deps */
import "./ItemDetailContainer.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext.js";
import ItemCount from "../ItemCount/ItemCount.js";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);

  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addToCart(item, cantidad);
  };

  return (
    <div className="itemDetail">
      <div className="itemDetail-imagen">
        <img className="itemDetail-img" src={item.imageid} alt={item.title} />
      </div>
      <div className="itemDetail-cuerpo">
        <h2 className="itemDetail-title">{item.title}</h2>
        <p className="itemDetail-description">{item.description}</p>
        <p className="itemDetail-description"> Unidas Disponible: {item.stock}</p>
        <p className="itemDetail-description">Precio: ${item.price}</p>

        {cantidad === 0 ? (
          <ItemCount
            stock={item.stock}
            initial={1}
            precio={item.precio}
            onAdd={onAdd}
          />
        ) : (
          <Link to="/cart">
            <span className="itemDetail-span">
              <button className="itemDetail-btn">
                {cantidad} Unidades<br />
                  ver carrito
              </button>
            </span>
            <br />
            <button className="itemDetail-btn">Finalizar compra</button>
          </Link>
        )}
        <Link to="/">
          <button className="itemDetail-btn"> Seguir buscando Bolsos</button>
        </Link>
      </div>
    </div>
  );
};
export default ItemDetail;
