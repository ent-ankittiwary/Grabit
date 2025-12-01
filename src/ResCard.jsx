import CDN_URL from "./utils/constants";  
const ResCard = ({resDetail}) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resDetail.info;

  return (
    <div className="res-card">
      <div className="img-logo">
        <img src={CDN_URL+cloudinaryImageId} alt="img-logo"/>
      </div>
      <h2>{name}</h2>
      <h4>{avgRating}</h4>
      <h4>{cuisines}</h4>
      <h5>{costForTwo}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};
export default ResCard;
