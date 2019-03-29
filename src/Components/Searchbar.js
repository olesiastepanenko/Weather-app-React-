import React, {Component} from 'react';
import PropTypes from "prop-types";




class Searchbar extends Component{
    state = {
        name:'',
    };
    handleChange = (e) => {
        this.setState({name: e.currentTarget.value})
    };
    // check that feld is not enpty
    validate = () => {
        const {name} = this.state;
        return name.trim()
    };
    handleClick = (e) => {
        e.preventDefault();
        const {name} = this.state;
        // alert(name + '\n' + text)
        this.props.onADDTown({
            id: +new Date(), //  id now in milisec
            name: name,
        })
    };

    render() {
        const {name} = this.state; // town name from state
        return (
            <div className="search__form">
                <form className="search">
                    <input
                        type="text"
                        id="town"
                        placeholder="Search for..."
                        onChange={this.handleChange}
                        value={name}
                    />
                    <button
                        className="search_btn"
                        onClick={this.handleClick}
                        disabled={!this.validate()}>
                        ADD TOWN
                    </button>
                </form>
            </div>
        );
    }

}

Searchbar.propTypes = {
    onADDTown: PropTypes.func.isRequired, // func исп-ся для проверки передачи function
};

export {Searchbar}