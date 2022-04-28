import React from "react";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import Pages from "./Pages";
import Search from "./Search";

function DataFetchPytek() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchData, setFetchDtata] = useState([]);
  let [search, setSearch] = useState("");

  let { info, results } = fetchData; //деструкториране

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchDtata(data);
    })();
  }, [api]);
  return (
    <div>
      <h1>The Rick and Morty API</h1>
    <Search setSearch = {setSearch} search= {search} setPageNumber = {setPageNumber}/>
      <Cards results={results} />
      <Pages pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default DataFetchPytek;
