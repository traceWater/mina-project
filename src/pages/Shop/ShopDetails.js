import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { Shop } from "./ShopList";

import "./Shop.css";

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
    <div className="">
      <div className="shop">
        {/* <h1 className="detail-heroShop">
        <img
          id="heroShop"
          src={process.env.PUBLIC_URL + "/ShopImages/TopShopImage.png"}
          alt="HeroImage"
          />
        </h1> */}

        <div className="detail-image">
          <img src={listItem?.image} alt={listItem?.title} />
        </div>

        <h1>
          <div className="detail-title">{listItem?.title}</div>
          <div className="detail-price">{listItem?.price}</div>
          <div className="detail-addtobag">Add to bag</div>
          <div className="detail-bio">{listItem?.bio}</div>
          <div className="detail-bio2">{listItem?.bio2}</div>
          <div className="detail-material">{listItem?.material}</div>
          <div className="detail-color">{listItem?.color}</div>
          <div className="detail-measurements">{listItem?.measurements}</div>
          <button onClick={handleOnClick}>Back to List</button>
        </h1>
        <h1></h1>
      </div>
    </div>
  );
}
