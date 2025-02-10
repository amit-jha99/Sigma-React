// not using keys(not acceptable) <<<<index as key <<<<<< unique id (best practice)
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";


const Body = () => {
  //local state variable ->super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  //useEffect takes two arguments first is the arrow function and second is dependency array
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2107021&lng=72.8699379&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
   
    //optional chaining 
    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

//   console.log("Body rendered");

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
            setlistOfRestaurants(filteredList);
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
