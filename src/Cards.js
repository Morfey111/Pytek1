import React from "react";
import './Cards.css'

function Cards({ results }) {
  console.log(results);

  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <div className="card" key={id}>
            <div className=""><img src={image} alt=""/></div>
            <div className="content"></div>
            <div className="title">{name}</div>
            <div>
                <div>Last location</div>
                <div className="location">{location.name}</div>
                
                <div className="status">{(()=>{
                    if(status === 'Dead'){ return <div id ="statDead">status: {status}</div>}
                    else if(status === 'Alive'){return <div id ="statAlive">status: {status}</div>}
                    else{return <div id ="unknown">status: {status}</div>}
                })()} </div>
            </div>
        </div>
      );
    });
  } else {
    display = "Not Found :( ..."
  }

  return <div className="container">{display}</div>;
}

export default Cards;
