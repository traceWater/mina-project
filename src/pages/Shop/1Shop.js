import { Link } from "react-router-dom";

import "./Shop.css";

export default function Shop() {
  return (
    <div className="content">
      <h3 className="centerShop">Shop</h3>
      <div className="shopTop">
        {[0].map((p) => (
          <div key={p}>
            <Link to={`/shopsTop/${p}`}>
              <img
                id="centerShop"
                src={
                  process.env.PUBLIC_URL + "/ShopImages/dd-d95eByKQX2CoQJ4L.png"
                }
                alt="HeroImage"
              />
            </Link>
          </div>
        ))}
      </div>
      <h3>.</h3>
      <div className="shops">
        {[1, 2, 3].map((p) => (
          <div key={p}>
            <Link to={`/shops/${p}`}>
              <img src="https://via.placeholder.com/450x450" alt="." />
            </Link>
          </div>
        ))}
      </div>
      <h3>.</h3>
      <div className="shops">
        {[4, 5, 6].map((p) => (
          <div key={p}>
            <Link to={`/shops/${p}`}>
              <img src="https://via.placeholder.com/450x450" alt="." />
            </Link>
          </div>
        ))}
      </div>
      <h3>.</h3>
      <div className="shops">
        {[7, 8, 9].map((p) => (
          <div key={p}>
            <Link to={`/shops/${p}`}>
              <img src="https://via.placeholder.com/450x450" alt="." />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
