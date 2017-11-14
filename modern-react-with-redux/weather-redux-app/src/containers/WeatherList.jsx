import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherChart from '../components/WeatherChart';

class WeatherList extends Component {
    renderWeather(cityWeather) {
        const name = cityWeather.city.name;
        const temps = [];
        const pressure = [];
        const humidity = [];
        const mainData = cityWeather.list.forEach(weather => {
            temps.push(weather.main.temp);
            pressure.push(weather.main.pressure);
            humidity.push(weather.main.humidity);
        });

        console.log(temps);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td><WeatherChart data={temps} color="orange" units="K" /></td>
                <td><WeatherChart data={pressure} color="blue" units="hPa" /></td>
                <td><WeatherChart data={humidity} color="green" units="%" /></td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City </th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
};

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);