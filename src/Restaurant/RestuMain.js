import React,{useState} from 'react'
import './restaurant.css'
import MenuCard from './MenuCard'
import MenuBtn from './MenuBtn'
import Menu from './MenuApi';

const allCategItem=[...new Set(Menu.map((curElem)=>curElem.category)),"all"]

const RestuMain = () => {
    const[menuItem,setMenuItem]=useState(Menu);
    const[categItem,setCategItem]=useState(allCategItem);
    const filterItem=(categItem)=>{
        console.log(categItem)
        if(categItem==="all"){
            setMenuItem(Menu);
        }
        else{
        const getFilterItem=Menu.filter((curElem)=>{
            return curElem.category===categItem;
        });
        setMenuItem(getFilterItem);
    }
}
    return <>
        <h1 className="text-center mt-5 shadow p-3 rounded">Order Your Favourite Dish</h1>

        {/* Menu */}
        <MenuBtn filterItem={filterItem} categItem={categItem} />
        

        {/* Main Item */}

       <MenuCard menuItem={menuItem}/>

    </>

}
export default RestuMain;