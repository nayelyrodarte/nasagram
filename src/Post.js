import React, { useState, useEffect } from "react";

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

  // TODO; Manage unlike
  const _manageLike = () => {
    if (like) {
      setLike(false);
      // setLikesData(updatedLikes);
    }

    if (!like) {
      setLike(true);
      likes.push(identifier);
    }

    sessionStorage.setItem("likes", JSON.stringify(likes));
  };

  return (
    <article className="post">
      <p>{date}</p>
      <img src={url} alt={caption} style={{ width: "5em" }}></img>
      <button
        className={`${like ? "like" : "unlike"}`}
        onClick={(e) => _manageLike()}
      >
        Like
      </button>
    </article>
  );
}

export default Post;
