import React from "react";

const MenuBtn=({filterItem,categItem})=>{
return<>
    <div className="container">
            <div className="d-flex justify-content-around">
            {
                categItem.map((curCateg,index)=>{
                    return <button key={index} type="button" className="btn btn-primary" onClick={()=>filterItem(curCateg)}>{curCateg}</button>
                })
            }
                
                {/* <button type="button" className="btn btn-success"onClick={()=>filterItem('lunch')} >Lunch</button>
                <button type="button" className="btn btn-danger">Evening</button>
                <button type="button" className="btn btn-warning">Dinner</button>
                <button type="button" className="btn btn-info">All</button> */}
            </div>
        </div>
</>
}
export default MenuBtn;