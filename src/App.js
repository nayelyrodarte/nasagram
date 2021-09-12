import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/EPIC/api/natural?api_key=XtvWaKCFwjrT48ikMygia8yNi8a3KUm88sD2aMcL"
    )
      .then((res) => res.json().then((result) => setData(result)))
      .catch((e) => console.error(e));

    // return () => {
    //   cleanup
    // }
  }, []);

  return <div></div>;
}

export default App;