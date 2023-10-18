import React, {useState} from "react";

function ToyCard({toyName, toyImage, toyLikes, toyId, handleDeleteClick, handleToyLikes}) {
  // console.log(toyName + toyLikes)



  return (
    <div className="card">
      <h2>{toyName}</h2>
      <img
        src={toyImage}
        alt={toyName}
        className="toy-avatar"
      />
      <p>{toyLikes} Likes </p>
      <button className="like-btn" onClick={()=>handleToyLikes(toyId, toyLikes)}>Like</button>
      <button className="del-btn" onClick={()=>handleDeleteClick(toyId)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
