import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { Shop } from "./ShopList";

export default function ShopDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useOutletContext();

  const handleOnClick = () => {
    setShowDetails(false);
    navigate(-1);
  };

  const listItem = Shop.find((item) => {
    return item.id === id;
  });

  return (
    <div className="content">
      <div className="shop">
        <div className="image">
          <img src={listItem?.image} alt={listItem?.title} />
        </div>
        <div className="details">
          <h2>Shop - {id}</h2>
          <p>
            {listItem?.id}
            {listItem?.title}
            {listItem?.image}
            {listItem?.price}
          </p>
          <button onClick={handleOnClick}>Back to List</button>
        </div>
      </div>
    </div>
  );
}
