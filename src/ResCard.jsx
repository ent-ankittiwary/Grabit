import { Link } from "react-router-dom";
// import { MENU_API } from "./utils/constants";
const ResCard = ({ resDetail }) => {
  const { image, name, rating, cft, locality } = resDetail.info; //cft is costForTwo
  // const resId = resDetail?.info?.resId;
  // console.log(resDetail);
  const menuUrl = resDetail?.order?.actionInfo?.clickUrl;
  // console.log(typeof menuUrl); // to find datatype of variable in javascript use typeof <variable name>;
  // const finalUrl=`${MENU_API}${menuUrl}`;
  // console.log(finalUrl);
return (
  <div>
    <Link to={`${menuUrl}`}>
      <div className=" flex flex-col gap-2 p-4 w-64 relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-120 transition">

        {/* Image */}
        <div className="w-full h-40 overflow-hidden rounded-md">
          <img
            src={image.url}
            alt="img-logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <h2 className="text-lg font-bold text-gray-800">
          {name}
        </h2>

        <h4 className="text-sm font-semibold text-green-600">
          ⭐ {rating.rating_text}
        </h4>

        <h5 className="text-sm text-gray-600">
          {cft.text}
        </h5>

        <h5 className="text-xs text-gray-500">
          {locality.name}
        </h5>

      </div>
    </Link>
  </div>
);

};

//Higher Order Component 
export const withOfferLabel=(ResCard)=>{
  return (props)=>{
    console.log(props);
    return(
      <div className="relative">
        <label className="absolute top-1 left-1 z-10 bg-blue-700 text-white m-1 p-2 rounded-xl" >{props.resDetail.bulkOffers[0].text}</label>
        <ResCard {...props} />
      </div>
    )
  }
}

export default ResCard;
