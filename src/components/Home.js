import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
          className="home_img"
        />
        <div className="home_row">
          <Product
            id={1123421}
            title="Smart phone samsung 1"
            price={18.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71MRKd%2BAsvL._SX522_.jpg"
            rating={5}
          />
          <Product
            id={4213212}
            title="Smart phone samsung 2"
            price={18.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71MRKd%2BAsvL._SX522_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id={3412321}
            title="Smart phone samsung 3"
            price={18.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71MRKd%2BAsvL._SX522_.jpg"
            rating={3}
          />
          <Product
            id={423213214}
            title="Smart phone samsung 4"
            price={18.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71MRKd%2BAsvL._SX522_.jpg"
            rating={5}
          />
          <Product
            id={4213215}
            title="Smart phone samsung 5"
            price={18.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71MRKd%2BAsvL._SX522_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id={4213216}
            title="Smart phone samsung 6"
            price={18.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71MRKd%2BAsvL._SX522_.jpg"
            rating={3}
          />
        </div>
      </div>
      
    </div>
    
  );
};

export default Home;
