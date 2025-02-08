// not using keys(not acceptable) <<<<index as key <<<<<< unique id (best practice)
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    //local state variable ->super powerful variable
    const[listOfRestaurants,setlistOfRestaurants] = useState([ {
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
        },
      }
    ,{
        info: {
          id: "37968",
          name: "Burger King",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_37968.JPG",
          locality: "Thakur Village",
          areaName: "Kandivali East",
          costForTwo: "₹300 for two",
          cuisines: ["Pizzas"],
          avgRating: 3.5,
        },
      }])
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            
            // Filter restaurant here
           filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setlistOfRestaurants(filteredList)
            // console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* //Restaurantcard  a Seperate component */}
        {/* <RestaurantCard resData={resList[1]} /> */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
