import "./App.css";
import React, { useEffect, useState } from "react";
import Post from "./Post";

//assets
import loadingImage from "./assets/spinner.svg";

function App() {
  const [data, setData] = useState([]);
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.nasa.gov/EPIC/api/natural?api_key=XtvWaKCFwjrT48ikMygia8yNi8a3KUm88sD2aMcL"
    )
      .then((res) =>
        res.json().then((result) => {
          setData(result);
          setLoading(false);
        })
      )
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

  if (loading) {
    return (
      <main>
        <img className="loader" alt="loader" src={loadingImage} />;
      </main>
    );
  }

  return (
    <main>
      <h1>SPACESTAGRAM</h1>
      <h3>featuring EPIC</h3>
      <h3>(Earth Polychromatic Imaging Camera)</h3>
      <section className="feed">
        {data?.map((item, index) => (
          <Post
            data={item}
            likes={likes}
            key={`post-${index}`}
            loading={loading}
          />
        ))}
      </section>
      <footer>
        <p>Made by Nayely Rodarte</p>
        <p>for Shopify's Front End Winter 2021 Internship Challenge</p>
        <a href="http://www.nayelyrodarte.com" target="blank">
          nayelyrodarte.com
        </a>
        <button
          onClick={(e) =>
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          Back to top ↑
        </button>
      </footer>
    </main>
  );
}

export default App;
