import React from "react";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import img11 from "../../assets/11.jpg";
import img12 from "../../assets/12.jpg";
import img13 from "../../assets/13.jpg";
import img14 from "../../assets/14.jpg";
import img15 from "../../assets/15.jpg";
import img16 from "../../assets/16.jpg";
import img17 from "../../assets/17.jpg";
import img18 from "../../assets/18.jpg";
import img19 from "../../assets/19.jpg";
import img20 from "../../assets/20.jpeg";
import img21 from "../../assets/21.jpeg";
import img22 from "../../assets/22.jpeg";
import img23 from "../../assets/23.jpeg";
import img24 from "../../assets/24.jpeg";

// const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

// function imageLink(path, width, height, size, extension) {
//   return `https://images.react-photo-album.com/hiking/${path}.${width}x${height}.${size}w.${extension}`;
// }

const photos = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 },
  { src: img13 },
  { src: img14 },
  { src: img15 },
  { src: img16 },
  { src: img17 },
  { src: img18 },
  { src: img19 },
  { src: img20 },
  { src: img21 },
  { src: img22 },
  { src: img23 },
  { src: img24 },
].map((img, index) => (
  <img
    key={index}
    src={img.src}
    className="w-full h-auto object-cover"
    loading="lazy"
  />
));

// .map(({ src, ...rest }) => {
//   const matcher = src.match(/^(.*)\.(\d+)x(\d+)\.(.*)$/);

//   const path = matcher[1];
//   const width = parseInt(matcher[2], 10);
//   const height = parseInt(matcher[3], 10);
//   const extension = matcher[4];

//   return {
//     src: imageLink(path, width, height, width, extension),
//     width,
//     height,
//     srcSet: breakpoints.map((breakpoint) => ({
//       src: imageLink(path, width, height, breakpoint, extension),
//       width: breakpoint,
//       height: Math.round((height / width) * breakpoint),
//     })),
//     ...rest,
//   };
// });

export default photos;
