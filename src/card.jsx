import { useState } from "react";

function Card(props) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="card">
      <h2>{props.title}</h2>

      <p>{liked ? "Liked" : "Not Liked"}</p>

      <button onClick={handleLike}>
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default Card;