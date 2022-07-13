import { Link } from "react-router-dom";
// import { useState } from 'react'

import "./Shop.css";


export default function Shop() {


  //  const [p, setP] = useState()
  //  const handleOnClick = (event) => {
  //    setP(event.target.alt) 
  //   }

  return (
    <div>
       {/* -------hero-image------ */}
      <h3 className="topCenterShop">Shop</h3>
        <div className="shopTop">
          {[0].map(p => (
            <div key={p}>
              <Link to={`/shopsTop/${p}`}>
                <img id="heroShop" src={ process.env.PUBLIC_URL + "/ShopImages/TopShopImage.png"}
                 alt="HeroImage"
                //  onClick={handleOnClick} alt={0}
                />
              </Link>
            </div>
           ))}
        </div>

        <div className="container">
  
        {/* ---------row-1-------- */}
      
        <div className="shop">
          {[1].map(p => (
            <div key={p}>
              <Link to={`/shop/${p}`}>
                <img id="row-1" src={ process.env.PUBLIC_URL + "/ShopImages/tanVaseBlueBall.png"} alt="r1"
                //  onClick={handleOnClick} alt={1}
                />
              </Link>
              <h2 className='one'>'Balance' Vase</h2>
              <p className='one-a'>$79.99</p>
            </div>
          ))} 
          {[2].map(p => (
            <div key={p}>
              <Link to={`/shop/${p}`}>
                <img id="row-1" src={ process.env.PUBLIC_URL + "/ShopImages/greenVaseBluePuck.png"} alt="r1"
                //  onClick={handleOnClick} alt={1}
                 />
              </Link>
              <h2 className='one'>'Binocular' Vase</h2>
              <p className='one-a'>$49.99</p>
            </div>
          ))}
          {[3].map(p => (
            <div key={p}>
              <Link to={`/shop/${p}`}>
                <img id="row-1" src={ process.env.PUBLIC_URL + "/ShopImages/orangeBallGreenStem.png"} alt="r1"
                //  onClick={handleOnClick} alt={1}
                 />
              </Link>
              <h2 className='one'>'Bubble' Flowerpot</h2>
              <p className='one-a'>$49.99</p>
            </div>
          ))}
         </div>

        {/* ---------row-2-------- */}
         <div className="shop">
          {[4].map(p => (
            <div key={p}>
              <Link to={`/shop/${p}`}>
                <img id="row-2" src={ process.env.PUBLIC_URL + "/ShopImages/greyVasePurpleRag.png"} alt="r2"
                // onClick={handleOnClick} alt={2}
                />
              </Link>
              <h2 className='one'>'Bulb' Vase</h2>
              <p className='one-a'>$39.99</p>
            </div>
          ))}
          {[5].map(p => (
            <div key={p}>
              <Link to={`/shop/${p}`}>
                <img id="row-2" src={ process.env.PUBLIC_URL + "/ShopImages/yellowVaseCactus.png"} alt="r2"
                // onClick={handleOnClick} alt={2}
                />
              </Link>
              <h2 className='one'>'Candy' Flowerpot</h2>
              <p className='one-a'>$59.99</p>
            </div>
          ))}
          {[6].map(p => (
            <div key={p}>
              <Link to={`/shop/${p}`}>
                <img id="row-2" src={ process.env.PUBLIC_URL + "/ShopImages/whiteVaseTwoPucksTanPur.png"} alt="r2"
                // onClick={handleOnClick} alt={2}
                />
              </Link>
              <h2 className='one'>'Drop' Vase</h2>
              <p className='one-a'>$49.99</p>
            </div>
          ))}
         </div>

         {/* ---------row-3-------- */}
         <div className="shop">
          {[7].map(p => (
            <div key={p}>
              <Link to={`/shop/${p}`}>
                <img id="row-3" src={ process.env.PUBLIC_URL + "/ShopImages/yellowVaseTwoArches.png"} alt="r3"
                // onClick={handleOnClick} alt={3}
                />
              </Link>
              <h2 className='one'>'Mango' Vase</h2>
              <p className='one-a'>$49.99</p>
            </div>
          ))}
          {[8].map(p => (
            <div key={p}>
              <Link to={`/shop/${p}`}>
                <img id="row-3" src={ process.env.PUBLIC_URL + "/ShopImages/yellowVase-U-Aside.png"} alt="r3"
                // onClick={handleOnClick} alt={3}
                />
              </Link>
              <h2 className='one'>'Sun' Vase</h2>
              <p className='one-a'>$59.99</p>
            </div>
          ))}
          {[9].map(p => (
            <div key={p}>
              <Link to={`/shop/${p}`}>
                <img id="row-3" src={ process.env.PUBLIC_URL + "/ShopImages/tanTribelDisc.png"} alt="r3"
                // onClick={handleOnClick} alt={3}
                />
              </Link>
              <h2 className='one'>'Wave' Vase</h2>
              <p className='one-a'>$69.99</p>
            </div>
          ))}
         </div> 
      </div>
    </div>
  );
}
