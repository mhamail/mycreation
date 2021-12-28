import React from "react";
import Menu from "./MenuApi";

const MenuCard=({menuItem})=>{
return <>
     <div className="container-fluid ">
        <div className="col-11 mx-auto ps-5">
            <div className="row my-5 ">
            {menuItem.map((item)=>{
                const{id,image,name,description,price}=item;
                return <div className="col-12 col-md-6 col-lg-4 pt-5 pb-3 shadow p-5" key={id} > 
                  <div className="row">
                        <div className="col-12 col-lg-4">
                        <img src={image} className="img-fluid"/>
                        </div>
                        <div className="col-12 col-lg-8 ">
                            <div className="main-title">
                                <h1>{name}</h1>
                                <p>{description}</p>
                            </div>
                            <div className="price-book d-flex">
                                <h2>{price}</h2>
                                <a href="#">
                                <button type="button" className="btn btn-primary btn-sm">Order Now</button>
                                </a>
                            </div>
                        </div>
                    </div>
                   
                </div> 
            })}
            </div>
            </div>
        </div>
</>
}
export default MenuCard;