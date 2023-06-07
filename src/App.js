import './App.css';
import {useJsonFetch} from "./components/useJsonFetch";
import {useState} from "react";

function App() {
  const {data, loading, error} = useJsonFetch("http://localhost:7070/error");
  console.log(data, loading, error);


  return (
      <div>
          {/*<h1>{data.data1}</h1>
          <h1>{data.loading}</h1>
          <h1>{data.error}</h1>*/}
      </div>
        )
}

export default App;
