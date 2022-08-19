import "./ItemList.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Loader from "../Loader/Loader";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    if (categoriaId) {
      const itemFiltrado = query(
        itemCollection,
        where("categoryId", "==", categoriaId)
      );
      getDocs(itemFiltrado).then((docs) => {
        const data = docs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);
        setCargando(false);
      });
    } else {
      getDocs(itemCollection).then((docs) => {
        const data = docs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);
        setCargando(false);
      });
    }
  }, [categoriaId]);

  return (
    <div>
      <h2 className="itemlist-titulo"></h2>
      <p className="itemlist-parrafo"></p>
      <p className="itemlist-parrafo"> {<Link to="/categoria/Mochila Nike"></Link>}</p>
      <p className="itemlist-parrafo"> {<Link to="/categoria/Mochila Adidas"></Link>}</p>
      {cargando ? <Loader /> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
