import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character'
      )
      .then((res) => {
          console.log(res)
        //   setCharacters(res.data)
      }, [characters])
      .catch((err) => console.log(err));
  });
  return <div>DataFetching
     {/* <ul>{characters.map(character => (<li key={character.id}>{character.result}</li>))}</ul> */}
  </div>;
}

export default DataFetching;
