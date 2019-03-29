import React, {Component} from 'react';

class WeatherDisplay extends Component {
    constructor() {
        super();
        this.state = {
            weatherData: null,
        };
    }

    componentDidMount() {
        const name = this.props.name;
        const URL = "https://openweathermap.org/data/2.5/weather?q=" +
            name +
            "&appid=b6907d289e10d714a6e88b30761fae22";
        fetch(URL).then(response => response.json()).then(json => {
            this.setState({weatherData: json});

        fetch(URL)
            .then(response => {
                return response.json()
            })
        });
        console.log(URL)
    }
// func verify Citys name???

    render() {
        console.log(this.state, 'weather');
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div className='weather__info'>Loading...</div>;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        const grad = Math.round(weatherData.main.temp);
        const speed = weatherData.wind.speed;
        return (
            <div className='weather__info'>
    <h1>
        {weather.main} in {weatherData.name}
        <img src={iconUrl} alt={weatherData.description} />
    </h1>
                <p>Temperature: {grad} °</p>
                <p>Wind speed: {speed} m/s </p>
            </div>
        );
    }

}

// function tempToC(far) {
//     return Math.round(((far-32)*0.556))
//
// }
// function speedToM(mph) {
//     return Math.round(mph*1.609344)
//
// }

export default WeatherDisplay

// {
//     "coord":{"lon":10.17,"lat":53.57},
//     "weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],
//     "base":"stations",
//     "main":{"temp":48.2,"pressure":1026,"humidity":52,"temp_min":44.6,"temp_max":53.01},
//     "visibility":10000,
//     "wind":{"speed":16.11,"deg":300},
//     "clouds":{"all":40},
//     "dt":1553005228,
//     "sys":{"type":1,"id":1263,"message":0.0038,"country":"DE","sunrise":1552973118,"sunset":1553016548},
//     "id":2911298,"name":"Hamburg","cod":200
// }
