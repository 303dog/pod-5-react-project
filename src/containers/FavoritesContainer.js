import React, { Component } from "react";
import ImageMed from "../components/ImageMed";
import { store } from "../store";
import { Link } from "react-router-dom";

class FavoritesContainer extends Component {
    state = {
        favorites: store.favorites,
    };
    renderImages = () => {
        return this.state.favorites.map((url, index) => {
            return (
                <div key={index}>
                    <ImageMed url={url} altText={"a dog"} />
                </div>
            );
        });
    };
    render() {
        return (
            <>
                <Link to={"/"}>Home</Link>
                {this.renderImages()}
            </>
        );
    }
}

export default FavoritesContainer;
