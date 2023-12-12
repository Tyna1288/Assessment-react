import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import AddForm from "./AddForm";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);
  
  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  const addSnack = (newSnack) => {
    setSnacks(snacks => [...snacks, {...newSnack, id: newSnack.id, name: newSnack.name}]);
  }

  const addDrink = (newDrink) => {
    setDrinks(drinks => [...drinks, {...newDrink, id: newDrink.id, name: newDrink.name}]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>

            <Route exact path="/snacks">
              <Menu items={snacks} category="Snacks" url="snacks" />
            </Route>

            <Route path="/snacks/:id">
              <MenuItem items={snacks} cantFind="/items" />
            </Route>

            <Route exact path="/drinks">
              <Menu items={drinks} category="Drinks" url="drinks" />
            </Route>

            <Route path="/drinks/:id">
              <MenuItem items={drinks} cantFind="/items" />
            </Route>

            <Route path="/add">
              <AddForm addSnack={addSnack} addDrink={addDrink} />
            </Route>

            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>

          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
