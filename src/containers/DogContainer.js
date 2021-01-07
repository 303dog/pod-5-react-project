import React, { Component } from "react";
import Select from "../components/Select";
class DogContainer extends Component {
    state = {
        breeds: [],
        currentSelection: null,
    };

    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((res) => res.json())
            .then(({ message }) => {
                const breeds = Object.keys(message);
                this.setState({ breeds });
            });
    }

    breedSelect = (event) => {
        this.setState({
            currentSelection: event.target.value,
        });
    };

    renderSelectionText = () => {
        return this.state.currentSelection ? (
            <p>You Selected: {this.state.currentSelection}</p>
        ) : (
            <p>Please make a selection</p>
        );
    };

    render() {
        return (
            <>
                <h1>DoggoPedia</h1>
                <Select
                    options={this.state.breeds}
                    handleOnChange={this.breedSelect}
                />
                {this.renderSelectionText()}
            </>
        );
    }
}

export default DogContainer;
