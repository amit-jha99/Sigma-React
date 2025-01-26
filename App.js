import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Planning of Food Delivery App
 *
 * Header
 * - Logo
 * - Navbar
 * body
 * - Search bar
 * - Restaurant container
 *    - Restaurant Card
 *      -img
 *      - Name of restaurant,star Rating,cuisines delivery time
 * footer
 *  -Copyright
 *  - Links
 *  -Address
 *  -Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/o6prrzzimmmnsgeuxf73" alt="res-menu" />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian,Asian</h4>
      <h4>4.5 star</h4>
      <h4>30 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* //Restaurantcard  a Seperate component */}
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />);
