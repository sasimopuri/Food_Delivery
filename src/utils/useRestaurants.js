import { useState, useEffect } from "react";
import { restro_menu } from "./constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  },[]);

  const getRestaurantMenu = async () => {
    const apiresult = await fetch(restro_menu + id);
    const data = await apiresult.json();
    setResInfo(data?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
