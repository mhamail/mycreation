import React, { useEffect, useState } from 'react'
import './weather.css'
import Widget from './Widget'

const WeatherMain = () => {
    const[inputValue,setInputValue]=useState('islamabad');
    const[tempInfo,setTempInfo]=useState({});
    
    const getWeatherInfo=async()=>{
        try{
            let url=`http://api.penweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=513b47ccada8f49401b857063b15165e`;
            let res=await fetch(url)
            let data=await res.json();

            const {temp,humidity,pressure}= data.main;
            const{main:weathermood}= data.weather[0];
            const{name}=data;
            const{speed}=data.wind;
            const{country,sunset}=data.sys;

            const weatherInfo={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            }
            setTempInfo(weatherInfo);

        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getWeatherInfo();
    },[])
    return (
        <>
            <div className='gridder'>
                <div className="middleDiv">
                    <div className="d-flex searchbtn">
                        <input 
                        type="text" 
                        placeholder='search...' 
                        value={inputValue} 
                        onChange={(e)=>{setInputValue(e.target.value)}}/>
                        
                        <button onClick={getWeatherInfo}>Search</button>
                    </div>
                    <Widget data={tempInfo}/>                  
                </div>
            </div>
        </>
    )
}

export default WeatherMain
