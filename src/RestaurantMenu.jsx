// import { useEffect, useState } from "react";
// import { MENU_API } from "./utils/constants";
// import { useParams } from "react-router-dom";
// const RestaurantMenu = () => {
//   const menuUrl = useParams();
//   console.log(menuUrl);
//   const fetchMenu = async () => {
//     const data = await fetch(
//       `${MENU_API}${menuUrl}`
//     );
//     const json = await data.json();
//     console.log(json);
//   };

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   return (
//     <div className="menu">
//       {/* <h1>{json.page_info.name}</h1> */}
//       <h2>Menu</h2>
//       <ul>
//         <li>Biryani</li>
//         <li>Burgers</li>
//         <li>Diet Coke</li>
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;

import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import { MENU_API } from "./utils/constants";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
  const { newMenuUrl } = useParams();
  console.log(newMenuUrl);
  // const location = useLocation();
  // const finalUrl = location.state?.finalUrl;

  // ✅ Store full menu JSON here
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true); // 🔹 added
  const [showIndex,setShowIndex]=useState(0);


  useEffect(() => {
    // if (!finalUrl) return;

    const fetchMenu = async () => {
      try {
        const response = await fetch(`${MENU_API}/kanpur/${newMenuUrl}/order`);
        const json = await response.json();
        console.log(json);

        // ✅ Save JSON globally in component
        setMenuData(json);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setLoading(false); // 🔹 stop shimmer
      }
    };

    fetchMenu();
  }, []);

  if (loading) {
    return <ShimmerMenu />;
  }

  const {name,rating, cuisine_string, res_status_text, timing }=menuData?.page_data?.sections?.SECTION_BASIC_INFO;
  console.log(name);
   const { address} = menuData?.page_data?.sections?.SECTION_RES_CONTACT;
  const menus  = menuData?.page_data?.order?.menuList.menus
  console.log(menus);

  return (
    <div className="menu">
      <div className="font-bold text-md p-2 m-2">
      <h2 className="text-blue-900 font-extrabold underline">{name}</h2>
      <h3>{address}</h3>
      <h2>⭐{rating.rating_text}</h2>
      <h2 className="text-yellow-900">{cuisine_string}</h2>
      <h2 className="text-md text-green-800">{timing.timing_desc}</h2>
      <h2 className="text-2xl text-red-700">{res_status_text}</h2>
      </div>

      <div>
          {menus.map((menuItem,index) => (
            <RestaurantCategory 
              key={menuItem?.menu?.id}
              menu={menuItem}
              showItems={index===showIndex ?true: false}
              setShowIndex={()=>setShowIndex(index)}
            />
          ))}
          
        </div>

   
    </div>
  );
};

export default RestaurantMenu;
