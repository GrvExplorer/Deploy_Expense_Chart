import "./App.css";
import ExpensesChartBody from "./components/ExpensesChartBody";
import data from './data.json'
import React from "react";

function App() {


  return (
    <div>
    <ExpensesChartBody data={data} />
    </div>
  )
}

export default App;
