import "./ItemList.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item">
      <img className="item-img" src={item.imageid} alt={item.title} />
      <div>
        <h2 className="item-title">{item.title}</h2>
        <p className="item-description">{item.description}</p>
      </div>
      <div>
        <Link to={`/item/${item.id}`}>
          <button className="item-btn">Ver Bolso</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
