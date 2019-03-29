import React, {Component} from 'react';
import WeatherDisplay from './WeatherDisplay'

class Places extends Component{
    constructor() {
        super();
        this.state = {
            activePlace: 0,
        };
    }
        render() {
            const {data} = this.props;
            const activePlace = this.state.activePlace;
console.log(data, "data");
//             console.log('a', activePlace);
//             console.log(data.places[activePlace], 'data');
            console.log(this.state.activePlace, 'activePlace');

            return (
                <div className='info'>
                    <div className="places">

                    {data.places.map((place, index) => (
                        <div className='city'
                            key={index}
                            onClick={() => {
                                this.setState({ activePlace: index });
                            }}
                        >
                            {place.name}
                        </div>
                    ))}
                    </div>
                    <WeatherDisplay
                    key={activePlace}
                    name={data.places[activePlace].name}
                />

                </div>
        )



    }

}



export {Places}

