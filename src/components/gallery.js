
import React from "react";
import ImageCard from "./imagecard";

import img1 from "../assets/c1.jpeg";
import img2 from "../assets/c2.jpeg";
import img3 from "../assets/c3.jpeg";
import img4 from "../assets/c4.jpeg";
import img5 from "../assets/c5.jpeg";
import img6 from "../assets/c6.jpeg";
import img7 from "../assets/c7.jpeg";
import img8 from "../assets/c8.jpeg";
import img9 from "../assets/c9.jpeg";
import img10 from "../assets/c10.jpeg";
import img11 from "../assets/c11.jpeg";
import img12 from "../assets/c12.jpeg";
import img13 from "../assets/c13.jpeg";
import img14 from "../assets/c14.jpeg";
import img15 from "../assets/c15.jpeg";
import img16 from "../assets/c16.jpeg";
import img17 from "../assets/c17.jpeg";
import img18 from "../assets/c18.jpeg";
import img19 from "../assets/c19.jpeg";
import img20 from "../assets/c20.jpeg";

const SAMPLE_IMAGES = [
  { id: 1, title: "Zara", image: img1 },
  { id: 2, title: "Luna", image: img2 },
  { id: 3, title: "Coco", image: img3 },
  { id: 4, title: "Niki", image: img4 },
  { id: 5, title: "Poppy", image: img5 },
  { id: 6, title: "Mylo", image: img6 },
  { id: 7, title: "Leo", image: img7 },
  { id: 8, title: "Kitty", image: img8 },
  { id: 9, title: "Snowy", image: img9 },
  { id: 10, title: "Daisy", image: img10 },
  { id: 11, title: "Noori", image: img11 },
  { id: 12, title: "Mochi", image: img12 },
  { id: 13, title: "Bella", image: img13 },
  { id: 14, title: "Oreo", image: img14 },
  { id: 15, title: "Simba", image: img15 },
  { id: 16, title: "Lisa", image: img16 },
  { id: 17, title: "Nio", image: img17 },
  { id: 18, title: "Zuzu", image: img18 },
  { id: 19, title: "Pixie", image: img19 },
  { id: 20, title: "Paws", image: img20 },
];

function Gallery() {
  return (
    <div className="gallery">
      {SAMPLE_IMAGES.map((item) => (
        <ImageCard
          key={item.id}
          title={item.title}
          imageUrl={item.image}
        />
      ))}
    </div>
  );
}

export default Gallery;
