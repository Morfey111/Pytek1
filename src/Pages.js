import React from 'react'
import './Pages.css'


function Pages({setPageNumber, pageNumber}) {

    let next = ()=>{
        if(pageNumber === 20 ) return

        setPageNumber( prevState => { return prevState + 1})
    }
    let prev = ()=>{
        if(pageNumber === 1 ) return

        setPageNumber( prevState => { return prevState - 1})

    }

  return (
    <div>
        <button onClick={prev}>previous</button>
        <button onClick={next}>next</button>
    </div>
  )
}

export default Pages