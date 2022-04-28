import React from 'react'

function Search({setSearch, search, setPageNumber}) {
  return (
    <form>
        <input 
        placeholder='search for characters' 
        type='text'
        value={search}
        onChange={(e)=>{
            setPageNumber(1)
            setSearch(e.target.value)}}
        />
        <button type='button' onClick={e=> {e.preventDefault()}}>Search</button>
    </form>
  )
}

export default Search