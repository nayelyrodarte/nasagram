import React, { useState, useEffect } from "react";
import Img from "react-cool-img";

//assets
import loadingImage from "./assets/spinner.svg";

function Post({ data, likes }) {
  const [like, setLike] = useState(false);

  const { identifier, date, image, caption } = data;

  useEffect(() => {
    if (likes.includes(identifier)) {
      setLike(true);
    }
  }, [likes, identifier]);

  let dateQuery = date.replaceAll("-", "/").slice(0, 10);
  let url = `https://epic.gsfc.nasa.gov/archive/natural/${dateQuery}/png/${image}.png`;

  const _manageLike = () => {
    if (like) {
      setLike(false);
      const index = likes.indexOf(identifier);
      likes.splice(index, 1);
    }

    if (!like && !likes.includes(identifier)) {
      setLike(true);
      likes.push(identifier);
    }

    sessionStorage.setItem("likes", JSON.stringify(likes));
  };

  return (
    <article className="post">
      <p>{date}</p>
      <Img placeholder={loadingImage} src={url} alt={caption}></Img>
      <p>{caption}</p>
      <button
        className={`${like ? "like" : ""}`}
        onClick={(e) => _manageLike()}
      >
        Like
      </button>
    </article>
  );
}

export default Post;
