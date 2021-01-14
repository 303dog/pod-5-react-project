import React, { Component } from "react";
import Select from "../components/Select";
import ImageMed from "../components/ImageMed";
import { store } from "../store";
import { Link } from "react-router-dom";
class DogContainer extends Component {
    state = {
        breeds: [],
        imageUrls: [],
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
        const currentSelection = event.target.value;
        fetch(`https://dog.ceo/api/breed/${currentSelection}/images`)
            .then((res) => res.json())
            .then(({ message }) => {
                const imageUrls = message.slice(0, 10);
                this.setState({
                    imageUrls,
                    currentSelection,
                });
            });
    };

    addToFavorites = (url) => {
        store.favorites.push(url);
        console.log(store.favorites);
    };

    renderImages = () => {
        return this.state.imageUrls.map((url, index) => {
            return (
                <div key={index}>
                    <ImageMed url={url} altText={this.state.currentSelection} />
                    <button onClick={() => this.addToFavorites(url)}>
                        Favorite
                    </button>
                </div>
            );
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
                <Link to={"/favorites"}>Favorites</Link>
                {this.renderSelectionText()}
                {this.state.imageUrls.length > 0 && this.renderImages()}
            </>
        );
    }
}

export default DogContainer;
