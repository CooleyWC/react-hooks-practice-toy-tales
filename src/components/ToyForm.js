import React, {useState} from "react";

function ToyForm({toyData, setToyData}) {

  // const [submittedData, setSubmittedData] = useState([]);
  const [nameValue, setNameValue] = useState('');
  const [imageValue, setImageValue] = useState('');


  function handleNameChange(e){
    setNameValue(e.target.value)
  }

  function handleImageChange(e){
    setImageValue(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();

    const newToy = {
      "name": nameValue,
      "image": imageValue,
      "likes": 0
    }

    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then(res=>res.json())
    .then(responseObject=>setToyData([...toyData, responseObject])
    )}

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNameChange}
          value={nameValue}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleImageChange}
          value={imageValue}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
