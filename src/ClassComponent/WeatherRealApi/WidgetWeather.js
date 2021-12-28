import React, { Component } from 'react'

class WidgetWeather extends Component {
    constructor() {
        super();
        this.state = {
            weatherState: 'wi-night-sleet'
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.data.weathermood !== this.props.data.weathermood){
            switch(this.props.data.weathermood){
                case "Clouds":
                    this.setState({weatherState:"wi-day-cloudy"});
                break;
                case "Haze":
                    this.setState({weatherState:"wi-fog"});
                break;
                case "Mist":
                    this.setState({weatherState:"wi-dust"})
                break;
                case "Clear":
                    this.setState({weatherState:"wi-day-sunny"})
                break;

                default:
                    this.setState({weatherState:"wi-day-sunny"})
                    
            }
        }
    }
    render() {
        const {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset,
        }=this.props.data;
            let date = new Date(sunset * 1000);
            let timeStr = `${date.getHours()}:${date.getMinutes()}`;
            const twoSided = [
                {
                    id: 1,
                    api: timeStr,
                    name: 'Sunset',
                },
                {
                    id: 2,
                    api: humidity,
                    name: 'Humidity',
                },
                {
                    id: 3,
                    api: pressure,
                    name: 'Pressure',
                },
                {
                    id: 4,
                    api: speed,
                    name: 'Speed',
                }
            ]
        return (
            <>
                <div className="widget">
                            <div className="weatherIcon">
                                <i className={`wi ${this.state.weatherState}`}></i>
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
                                {twoSided.map((elem) => {
                                    return <div index={elem.id} className="twoSided">
                                        <p> <i className="wi wi-sunset"></i></p>
                                        <p className='info'>
                                            {elem.api} <br />
                                            {elem.name}
                                        </p>
                                    </div>

                                })}

                            </div>
                        </div>
            </>
        )
    }
}

export default WidgetWeather
