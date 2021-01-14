import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DogContainer from "./containers/DogContainer";
import FavoritesContainer from "./containers/FavoritesContainer";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={DogContainer} />
                <Route exact path="/favorites" component={FavoritesContainer} />
            </Switch>
        </Router>
    );
}

export default App;
