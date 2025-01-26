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

const RestaurantCard = (props) => {
  const {resData} = props
  // console.log(props);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/o6prrzzimmmnsgeuxf73"
        alt="res-menu"
      />
      <h3>{resData.Restaurant_Name}</h3>
      <h4>{resData.City}</h4>
      <h4>{resData.Address}</h4>
      <h4>{resData.Ratings_for_Swiggy}</h4>
    </div>
  );
};

const resObj = {
  "Restaurant_Name": "Sample Restaurant 1",
  "URL": "https://www.sample-restaurant1.com",
  "Timing": "10:00 AM - 10:00 PM",
  "Address": "123 Main Street, Sample City",
  "Location": "Sample Location",
  "City": "Sample City",
  "Offer": "10% off on orders over $50",
  "Contact_Number": "+1 123-456-7890",
  "Cost_for_two": 40,
  "Restaurant_Type": "Cuisine Type 1",
  "Ratings_for_Swiggy": 4.5
}
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* //Restaurantcard  a Seperate component */}
        <RestaurantCard
           resData={resObj}
        />
       
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
