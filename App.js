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
  const { resData } = props;
  // console.log(props);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}
        alt="res-menu"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.deliveryTime}</h4>
    </div>
  );
};

const resObj = {
  info: {
    id: "9866",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/1625d09a-2bfa-49c0-8797-780c096367f1_9866.jpg",
    locality: "Thakur Village",
    areaName: "Kandivali East",
    costForTwo: "₹300 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.3,
    parentId: "721",
    avgRatingString: "4.3",
    totalRatingsString: "11K+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 0.7,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "0.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-29 05:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.0",
        ratingCount: "1.6K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-169ca548-1c34-4fe5-9d5d-6783dfbcc892",
  },
  cta: {
    link: "https://www.swiggy.com/city/mumbai/pizza-hut-thakur-village-kandivali-east-rest9866",
    type: "WEBLINK",
  },
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* //Restaurantcard  a Seperate component */}
        <RestaurantCard resData={resObj} />
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
