import React from "react";
import ReactDOM from "react-dom";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";
import { useGetCoinData } from "./queries/useGetCoinData";

const App = () => {

  const [result, error, loading] = useGetCoinData()

  if (error) console.log(error)

  if (loading) {
    return <div classNAme="App"><h1 className="loading">LOADING...</h1></div>
  }

  return (
    <div className="App">
      <Navbar />
      <Charts coinData={result} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
