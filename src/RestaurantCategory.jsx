import {useState} from "react";
import ItemList from "./ItemList";
const RestaurantCategory= ({menu,showItems,setShowIndex}) => {
    const {items}=menu?.menu?.categories[0]?.category;
    {/*/ We need to put accordian to item menu */}
    const {name}=menu?.menu;

    // const [showItems,setShowItems]=useState({setShowState});
    const handleClick =() =>{
        setShowIndex();
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4" >
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-md">{name}({items.length})</span>
            <span >🔽</span>
            </div>
            {showItems && <ItemList items={items}/>}
            </div>
        </div>
    )

};
export default RestaurantCategory;