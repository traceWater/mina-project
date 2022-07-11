import { Link } from "react-router-dom"

import "./Shop.css";

// updated july 11, 2022 @8:49am
export default function Shop() {
  return (
    <div>
       {/* -------hero-image------ */}
      <h3 className="topCenterShop">Shop</h3>
        <div className="shopTop">
          {[0].map(p => (
            <div key={p}>
              <Link to={`/shopsTop/${p}`}>
                <img id="heroShop" src={ process.env.PUBLIC_URL + "/ShopImages/dd-d95eByKQX2CoQJ4L.png"} alt="HeroImage"/>
              </Link>
            </div>
          ))}
        </div>

        <div className="container">

        {/* ---------row-1-------- */}
      
        <div className="shops">
          {[1].map(p => (
            <div key={p}>
              <Link to={`/shops/${p}`}>
                <img id="row-1" src={ process.env.PUBLIC_URL + "/ShopImages/tanVaseBlueBall.png"} alt="r1"/>
              </Link>
            </div>
          ))}
          {[2].map(p => (
            <div key={p}>
              <Link to={`/shops/${p}`}>
                <img id="row-1" src={ process.env.PUBLIC_URL + "/ShopImages/greenVaseBluePuck.png"} alt="r1"/>
              </Link>
            </div>
          ))}
          {[3].map(p => (
            <div key={p}>
              <Link to={`/shops/${p}`}>
                <img id="row-1" src={ process.env.PUBLIC_URL + "/ShopImages/orangeBallGreenStem.png"} alt="r1"/>
              </Link>
            </div>
          ))}
         </div>

        {/* ---------row-2-------- */}
         <div className="shops">
          {[4].map(p => (
            <div key={p}>
              <Link to={`/shops/${p}`}>
                <img id="row-2" src={ process.env.PUBLIC_URL + "/ShopImages/greyVasePurpleRag.png"} alt="r2"/>
              </Link>
            </div>
          ))}
          {[5].map(p => (
            <div key={p}>
              <Link to={`/shops/${p}`}>
                <img id="row-2" src={ process.env.PUBLIC_URL + "/ShopImages/yellowVaseCactus.png"} alt="r2"/>
              </Link>
            </div>
          ))}
          {[6].map(p => (
            <div key={p}>
              <Link to={`/shops/${p}`}>
                <img id="row-2" src={ process.env.PUBLIC_URL + "/ShopImages/whiteVaseTwoPucksTanPur.png"} alt="r2"/>
              </Link>
            </div>
          ))}
         </div>

         {/* ---------row-3-------- */}
         <div className="shops">
          {[7].map(p => (
            <div key={p}>
              <Link to={`/shops/${p}`}>
                <img id="row-3" src={ process.env.PUBLIC_URL + "/ShopImages/yellowVaseTwoArches.png"} alt="r3"/>
              </Link>
            </div>
          ))}
          {[8].map(p => (
            <div key={p}>
              <Link to={`/shops/${p}`}>
                <img id="row-3" src={ process.env.PUBLIC_URL + "/ShopImages/yellowVase-U-Aside.png"} alt="r3"/>
              </Link>
            </div>
          ))}
          {[9].map(p => (
            <div key={p}>
              <Link to={`/shops/${p}`}>
                <img id="row-3" src={ process.env.PUBLIC_URL + "/ShopImages/tanTribelDisc.png"} alt="r3"/>
              </Link>
            </div>
          ))}
         </div> 
      </div>
    </div>
  )
}
