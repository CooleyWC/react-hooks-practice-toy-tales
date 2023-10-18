import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [toyData, setToyData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    fetch('http://localhost:3001/toys')
    .then(res=>res.json())
    .then(data=> {
      setToyData(data)
      setIsLoaded(true)
    })
  }, [])



  if(!isLoaded){<h1>Loading...</h1>}

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm toyData={toyData} setToyData={setToyData}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toyData} setToyData={setToyData}/>
    </>
  );
}

export default App;
