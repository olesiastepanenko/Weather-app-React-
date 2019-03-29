import React, {Component} from 'react';
import './App.css';
import {Searchbar} from "./Components/Searchbar";
import {Places} from "./Components/Places";

// import placesData from './data/places'

const PLACES = [
    {id: "0", name: "Sydney" },
    { id: "1", name: "Hurzuf" },
    { id: "2", name: "Moscow" },
    { id: "3", name: "Honolulu" },
    {id: "4", name: "Hamburg"},
];

class App extends Component {
    state = {
        places: PLACES,
        // activePlace: 0,
    };

    handleADDTown = (data) => {
        // console.log(data, 'data');
        // current places
        const nextPlace = [data, ...this.state.places];
        // update array
        this.setState({places: nextPlace});

    };

    render() {
        const places = this.state;
        console.log(this.state, 'state in app');
        return (
            <React.Fragment>
                <div className="App">
                    <Searchbar onADDTown={this.handleADDTown}/>

                    {/*{Array.isArray(places) && */}
                    <Places data={places}  />
                    {/*}*/}

                </div>
            </React.Fragment>
        );
    }
}

export default App;
