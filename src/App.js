import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Categories from "./Categories";
import logo from "./IMG/__logo.png";

//https://reactnative.dev/movies.json

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [counter, setCounter] = useState(0);
  console.log("Render App component");

  //La fonction useEffect prend 2 arguments
  //Premier argument, une fonction
  // 2e argument : un tableau

  // console.log("avant");
  useEffect(() => {
    console.log("useEffect");
    //Avec un tableau vide en deuxième argument
    // La fonction useEffect ne sera déclenchée qu'une fois fois, au chargement du composant
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-backend-enburgos.herokuapp.com/"
        );
        // console.log(response.data);
        setData(response.data);

        // J'exécute mon setIsLoading après avoir fait mon setData
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // console.log("après");

  return (
    <div className="App">
      {isLoading === true ? (
        <h1>En cours chargement</h1>
      ) : (
        <div>
          <header>
            <img src={logo} alt="logo"></img>
          </header>
          <div className="intro">
            <div className="introLeftPart">
              <h1>{data.restaurant.name}</h1>
              <p>{data.restaurant.description}</p>
            </div>
            <div className="introRightPart">
              <img src={data.restaurant.picture}></img>
            </div>
          </div>
          <div className="middlePage">
            <Categories categories={data.categories} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
