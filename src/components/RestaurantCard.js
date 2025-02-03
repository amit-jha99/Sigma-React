const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
      
      // sla: { deliveryTime }
    } = resData?.info;
    // console.log(props);
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          src={
             +
            cloudinaryImageId
          }
          alt="res-menu"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} mins</h4>
      </div>
    );
  };

export default RestaurantCard;