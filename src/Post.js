import React from "react";

function Post({ data }) {
  console.log(data);

  const { identifier, date, image, caption } = data;

  let dateQuery = date.replaceAll("-", "/").slice(0, 10);

  let url = `https://epic.gsfc.nasa.gov/archive/natural/${dateQuery}/png/${image}.png`;

  return (
    <article className="post">
      <p>{date}</p>
      <img src={url} alt={caption} style={{ width: "5em" }}></img>
    </article>
  );
}

export default Post;
