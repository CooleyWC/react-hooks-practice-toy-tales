import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData, setToyData}) {

  


  function handleDeleteClick(delToyId){
      fetch(`http://localhost:3001/toys/${delToyId}`, {
        method: "DELETE"
      })
      .then(res=>res.json())
      .then(()=>{
        const updatedToyListings = toyData.filter((toy)=>{
        return toy.id !== delToyId
      })
        setToyData(updatedToyListings)
    })
    }
  
    function handleToyLikes(likedToyId, toyLikes){
      console.log(likedToyId, toyLikes)
      // console.log('liked')


      fetch(`http://localhost:3001/toys/${likedToyId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({likes: toyLikes+1}) 
      })
      .then(res=>res.json())
      .then((responseObj)=>{
        handleToyUpdate(responseObj)
      })
    }

   function handleToyUpdate(updatedToyObj){
    const updatedToys= toyData.map((toy)=>{
      if(toy.id===updatedToyObj.id){
        return updatedToyObj
      } else {
        return toy
      }
    })
    setToyData(updatedToys)
   } 

  const toyListings = toyData.map((toy)=>{
    return <ToyCard
      toyId={toy.id} 
      key={toy.id}
      toyName={toy.name}
      toyImage={toy.image}
      toyLikes={toy.likes}
      handleDeleteClick={handleDeleteClick}
      handleToyLikes={handleToyLikes}
    
    />
  })
  return (
    <div id="toy-collection">{toyListings}</div>
  );
}

export default ToyContainer;
