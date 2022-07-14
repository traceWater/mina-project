import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import "./Shop.css";

export default function Shop() {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const handleOnClick = () => {
    setShowDetails(true);
    navigate(-1);
  };

  return (
    <div>
      {/* -------hero-image------ */}
      <h3 className="topCenterShop">Shop</h3>
      <div className="shopTop">
        {[0].map((p) => (
          <div key={p}>
            <Link to={`/shopsTop/${p}`}>
              <img
                id="heroShop"
                src={process.env.PUBLIC_URL + "/ShopImages/TopShopImage.png"}
                alt="HeroImage"
              />
            </Link>
          </div>
        ))}
      </div>
      {showDetails ? (
        <Outlet context={[showDetails, setShowDetails]} />
      ) : (
           
      <div className="container">
        
        {/* ---------row-1-------- */}
        <div className="shop">
          {[1].map((p) => (
            <div key={p}>
              <Link to={`/shop/${p}`}>
                <img
                  id="row-1"
                  src={
                    process.env.PUBLIC_URL + "/ShopImages/tanVaseBlueBall.png"
                  }
                  alt="'Balance' Vase"
                />
              </Link>
              <h2 className="one">'Balance' Vase</h2>
              <p className="one-a">$79.99</p>
            </div>
          ))}
          {[2].map((p) => (
            <div key={p}>
              <Link to={`/shop/${p}`}>
                <img
                  id="row-1"
                  src={
                    process.env.PUBLIC_URL + "/ShopImages/greenVaseBluePuck.png"
                  }
                  alt="'Binocular' Vase"
                />
              </Link>
              <h2 className="one">'Binocular' Vase</h2>
              <p className="one-a">$49.99</p>
            </div>
          ))}
          {[3].map((p) => (
            <div key={p}>
              <Link to={`/shop/${p}`}>
                <img
                  id="row-1"
                  src={
                    process.env.PUBLIC_URL +
                    "/ShopImages/orangeBallGreenStem.png"
                  }
                  alt="'Bubble' Flowerpot"
                />
              </Link>
              <h2 className="one">'Bubble' Flowerpot</h2>
              <p className="one-a">$49.99</p>
            </div>
          ))}
        </div>
      
          {/* ---------row-2-------- */}
          <div className="shop">
            {[4].map((p) => (
              <div key={p}>
                <Link to={`/shop/${p}`}>
                  <img
                    id="row-2"
                    src={
                      process.env.PUBLIC_URL +
                      "/ShopImages/greyVasePurpleRag.png"
                    }
                    alt="'Bulb' Vase"
                  />
                </Link>
                <h2 className="one">'Bulb' Vase</h2>
                <p className="one-a">$39.99</p>
              </div>
            ))}
            {[5].map((p) => (
              <div key={p}>
                <Link to={`/shop/${p}`}>
                  <img
                    id="row-2"
                    src={
                      process.env.PUBLIC_URL +
                      "/ShopImages/yellowVaseCactus.png"
                    }
                    alt="'Candy' Flowerpot"
                  />
                </Link>
                <h2 className="one">'Candy' Flowerpot</h2>
                <p className="one-a">$59.99</p>
              </div>
            ))}
            {[6].map((p) => (
              <div key={p}>
                <Link to={`/shop/${p}`}>
                  <img
                    id="row-2"
                    src={
                      process.env.PUBLIC_URL +
                      "/ShopImages/whiteVaseTwoPucksTanPur.png"
                    }
                    alt="'Drop' Vase"
                  />
                </Link>
                <h2 className="one">'Drop' Vase</h2>
                <p className="one-a">$49.99</p>
              </div>
            ))}
          </div>

          {/* ---------row-3-------- */}
          <div className="shop">
            {[7].map((p) => (
              <div key={p}>
                <Link to={`/shop/${p}`}>
                  <img
                    id="row-3"
                    src={
                      process.env.PUBLIC_URL +
                      "/ShopImages/yellowVaseTwoArches.png"
                    }
                    alt="'Mango' Flowerpot"
                  />
                </Link>
                <h2 className="one">'Mango' Vase</h2>
                <p className="one-a">$49.99</p>
              </div>
            ))}
            {[8].map((p) => (
              <div key={p}>
                <Link to={`/shop/${p}`}>
                  <img
                    id="row-3"
                    src={
                      process.env.PUBLIC_URL +
                      "/ShopImages/yellowVase-U-Aside.png"
                    }
                    alt="'Sun' Vase"
                  />
                </Link>
                <h2 className="one">'Sun' Vase</h2>
                <p className="one-a">$59.99</p>
              </div>
            ))}
            {[9].map((p) => (
              <div key={p}>
                <Link to={`/shop/${p}`}>
                  <img
                    id="row-3"
                    src={
                      process.env.PUBLIC_URL + "/ShopImages/tanTribelDisc.png"
                    }
                    alt="'Wave' Vase"
                  />
                </Link>
                <h2 className="one">'Wave' Vase</h2>
                <p className="one-a">$69.99</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
