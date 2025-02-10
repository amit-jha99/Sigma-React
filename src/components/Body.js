// not using keys(not acceptable) <<<<index as key <<<<<< unique id (best practice)
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import resList from "../utils/mockData";

const Body = () => {
    //local state variable ->super powerful variable
    const[listOfRestaurants,setlistOfRestaurants] = useState(resList);
    //useEffect takes two arguments first is the arrow function and second is dependency array
    useEffect(()=>{
        console.log("useEffect called");
    },[])
  
  return (  
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            
            // Filter restaurant here
           filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
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
