import React, { useState,useEffect } from 'react'

const Widget = ({data}) => {
    const[weatherState,setWeatherState]=useState("wi-night-sleet");
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    }=data;
    useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                break;
                case "Haze":
                    setWeatherState("wi-fog");
                break;
                case "Mist":
                    setWeatherState("wi-dust")
                break;
                case "Clear":
                    setWeatherState("wi-day-sunny")
                break;

                default:
                    setWeatherState("wi-day-sunny")
                    
            }
        }
    },[weathermood])
    let date=new Date(sunset*1000);
    let timeStr=`${date.getHours()}:${date.getMinutes()}`;
    
    const twoSided=[
        {
            id:1,
            api:timeStr,
            name:'Sunset',
        },
        {
            id:2,
            api:humidity,
            name:'Humidity',
        },
        {
            id:3,
            api:pressure,
            name:'Pressure',
        },
        {
            id:4,
            api:speed,
            name:'Speed',
        }
    ]
    return (
        <div className="widget">
        <div className="weatherIcon">
            <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="d-flex">
            <div className="weatherInfo">
                <div className="temperature">
                    {temp}&deg;
                </div>
                <div className="description">
                    <div className="weatherCondition">{weathermood}</div>
                    <div className="place">{name}, {country}</div>
                </div>
            </div>
            <div className="date">{new Date().toLocaleString()}</div>
        </div>
        <div className="weatherExtraInfo">
        {twoSided.map((elem)=>{
            return <div index={elem.id} className="twoSided">
                <p> <i className="wi wi-sunset"></i></p>
                <p className='info'>   
                {elem.api} <br/>
                {elem.name}
                </p>
            </div>

        })}
          
        </div>
    </div>
    )
}

export default Widget
