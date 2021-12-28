import React, { Component } from 'react'
import './weather.css'
import WidgetWeather from './WidgetWeather';

class ClassWeatherMain extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: 'islamabad',
            tempInfo: {},
            weatherState: 'wi-night-sleet'
        }
    }
    getWeatherInfo = async () => {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&units=metric&appid=513b47ccada8f49401b857063b15165e`;
            let res = await fetch(url);
            let data = await res.json();
            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const weatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            }

            this.setState({ tempInfo: weatherInfo })
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {

        return (
            <>
                <div className='gridder'>
                    <div className="middleDiv">
                        <div className="d-flex searchbtn">
                            <input
                                type="text"
                                placeholder='search...'
                                value={this.inputValue}
                                onChange={(e) => { this.setState({ inputValue: e.target.value }) }}
                            />

                            <button onClick={this.getWeatherInfo}>Search</button>
                        </div>
                        <WidgetWeather data={this.state.tempInfo}
                            weatherState={this.state.weatherState}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default ClassWeatherMain
