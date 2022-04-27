import React from 'react'
import {useEffect, useState} from 'react'

function TryDataFetch() {

    const [characters2 , setCharacters2] = useState(null)

    useEffect( ()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(res=>{
           return res.json()
        })
        .then(data => console.log(data))
    },[])

   
  return (
    <div>TryDataFetch
        {characters2}
    </div>

  )
}

export default TryDataFetch