import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (city, resName) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API}/${city}/${resName}/order`);
    const json = await data.json();
    setResInfo(json?.page_data);
  };
  
  return resInfo;
};

export default useRestaurantMenu;
