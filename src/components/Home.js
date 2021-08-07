import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
        alt=""
        className="home__image"
      />

      {/* Product Component */}
      <div className="home__row">
        <Product
          id={"12323"}
          image={
            "https://m.media-amazon.com/images/I/91tcQv06iPS._AC_UL480_FMwebp_QL65_.jpg"
          }
          title={
            "Bare Home Queen Sheet Set - 1800 Ultra-Soft Microfiber Queen Bed Sheets - Double Brushed - Queen Sheets Set - Deep Pocket - Bedding"
          }
          price={"160"}
          rating={3}
        />

        <Product
          id={"32981"}
          image={
            "https://m.media-amazon.com/images/I/716JCnJU1ZL._AC_UL480_FMwebp_QL65_.jpg"
          }
          title={
            "Cozy Line Home Fashions Pink Green Pastel Polka Dot Flower 100% Cotton Reversible 6-Piece Quilt Bedding Set (Full/Queen- 6 Piece)"
          }
          price={"144"}
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id={"49282938"}
          image={
            "https://m.media-amazon.com/images/I/71g7DbH5lBL._AC_UL480_FMwebp_QL65_.jpg"
          }
          title={
            "Android 10.0 Tablet : MEBERRY 10 Ultra-Fast 4GB/RAM,64GB/ROM Tablets"
          }
          price={"159"}
          rating={4}
        />

        <Product
          id={"4398218"}
          image={
            "https://m.media-amazon.com/images/I/61e6MLXjcSS._AC_UL480_FMwebp_QL65_.jpg"
          }
          title={
            "MARVUE Pad M20 Tablet, 10.1 Inch Tablet Android 10 Tablets, 2GB RAM 32GB Storage, 8MP+5MP"
          }
          price={"129"}
          rating={5}
        />

        <Product
          id={"3929989"}
          image={
            "https://m.media-amazon.com/images/I/71AmKW4yuMS._AC_UL480_FMwebp_QL65_.jpg"
          }
          title={
            "Acer Aspire 5 A515-46-R14K Slim Laptop | 15.6 Full HD IPS | AMD Ryzen 3 3350U Quad-Core "
          }
          price={"373"}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id={"8493829"}
          image={
            "https://m.media-amazon.com/images/I/81skV7BufjL._AC_UL480_FMwebp_QL65_.jpg"
          }
          title={
            "HP 15 Laptop, 11th Gen Intel Core i5-1135G7 Processor, 8 GB RAM, 256 GB SSD Storage, 15.6” Full HD IPS Display"
          }
          price={"629"}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
