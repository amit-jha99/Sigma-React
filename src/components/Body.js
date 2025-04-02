// not using keys(not acceptable) <<<<index as key <<<<<< unique id (best practice)
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //local state variable ->super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  //useEffect takes two arguments first is the arrow function and second is dependency array
  console.log("Body Rendered",listOfRestaurants);
  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2107021&lng=72.8699379&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    //optional chaining
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline !! Please check your internet connection
      </h1>
    );

  //conditional rendering and we have used ternary operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // console.log(searchText);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //Filter the restaurant and update the UI.
              // SearchText
              // console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100"
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
        
      </div>
      <div className="flex flex-wrap">
        {/* //Restaurantcard  a Seperate component */}
        {/* <RestaurantCard resData={resList[1]} /> */}
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
