import "./App.css";
import React, { useEffect, useState } from "react";
import Post from "./Post";

function App() {
  const [data, setData] = useState([]);
  const [likes, setLikes] = useState([]);

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

  useEffect(() => {
    let getLikes = JSON.parse(sessionStorage.getItem("likes"));

    if (getLikes) {
      setLikes(getLikes);
    }

    if (!getLikes) {
      sessionStorage.setItem("likes", JSON.stringify([]));
    }
  }, [data]);

  return (
    <main>
      <h1>NASAgram</h1>
      <section className="feed">
        {data?.map((item, index) => (
          <Post data={item} likes={likes} key={`post-${index}`} />
        ))}
      </section>
    </main>
  );
}

export default App;
