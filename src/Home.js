import React from "react";
// import { NavLink } from "react-router-dom";
import HomeApi from './HomeApi'


const Home = () => {
    return <>
        <div className="HomeBody">
            <h1 className="text-center text-light">Beginner Projects To Learn React Native</h1>
            <div className="container-fluid col-11 mx-auto pt-5">
                {HomeApi.map((item) => {     //Map Function Call from Home Api
                    const { id, image, alt, title, btnl, btn2, btn } = item;
                    return <div className="row mb-3" key={id}>
                        <div className="col-12 col-lg-6 imageSection">
                            <img src={process.env.PUBLIC_URL + image} alt={alt} className="img-fluid img" />
                        </div>
                        <div className="col-12 col-lg-6 writeSection">
                            <h2>{title}</h2>
                            <p>In which we see</p>
                            <ul>

                                {item.details.map((item, index) => {
                                    return <li key={index}>{item.info}</li>
                                })}

                            </ul>
                            {/* <NavLink to={btnl}>{btn}</NavLink> */}
                            <a href={btnl}>{btn}</a>
                            {btn2 == '' ? '' : <a href={btn2}><br /> With use reducer</a>}
                        </div>
                    </div>
                })}

            </div>
        </div>
    </>
}
export default Home;