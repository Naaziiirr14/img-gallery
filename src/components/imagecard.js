
import React from "react";

function ImageCard({ title, imageUrl }) {
  return (
    <article className="image-card">
      <div className="image-card__media">
        <img src={imageUrl} alt={title} loading="lazy" />
      </div>
      <h2 className="image-card__title">{title}</h2>
    </article>
  );
}

export default ImageCard;
