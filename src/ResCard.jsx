const ResCard = ({resDetail}) => {
    const {name,image, rating, locality} = resDetail.info;
    const {distance} = resDetail;
    
  return (
      <div className="res-card">
          <img className="res-image" src={image?.url} />
          <h2>{name}</h2>
          <h2>{locality.name}</h2>
          <h4>{rating.rating_text}</h4>
          <h5>{distance}</h5>
        </div>
  );
};
export default ResCard;
