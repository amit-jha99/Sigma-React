import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2107021&lng=72.8699379&restaurantId=9866&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    
    console.log(json);
  
    setResInfo(json.data);
  };

  if(resInfo === null){
    return <Shimmer/>
  }

  const{cuisines,name,costForTwoMessage} =resInfo?.cards[2]?.card?.card.info;

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  console.log(itemCards);

  return  (
    <div className="menu">
       <h1>{name}</h1>
      <h3>{cuisines.join(",")} - {costForTwoMessage}</h3> 
      <h3></h3>
      <h2>Menu</h2>
      <ul>
      {
        itemCards.map((item)=>{
          return <li>{item.card.info.name}</li>
        })
      }
       
      </ul>
    </div>
  );
};

export default RestaurantMenu;
