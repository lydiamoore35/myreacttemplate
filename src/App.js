import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/form"
import Display from "./components/display"

function App() {
  const [results, setResults] = React.useState({})

  const url = "http://www.omdbapi.com/?i=tt3896198&apikey=2fc36ba3&t="

  const getResults = async (searchterm) => {
    const response = await fetch(url + searchterm)
    const data = await response.json()
    setResults(data)
  }

  React.useEffect(() => {getResults("The Ring")}, [])

  return (
    <>
    <Form search={getResults}/>
    <Display movie={results} />
    </>
  );
}

export default App;
