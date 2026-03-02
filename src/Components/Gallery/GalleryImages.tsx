import React, { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import InfiniteScroll from "react-photo-album/scroll";
import Lightbox from "yet-another-react-lightbox";
import "react-photo-album/styles.css";
import "yet-another-react-lightbox/styles.css";
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

const GalleryImages = () => {
  const PAGE_SIZE = 12;
  const photosData = [
    { src: img1, width: 1200, height: 800 },
    { src: img2, width: 800, height: 1200 },
    { src: img3, width: 1000, height: 1000 },
    { src: img4, width: 900, height: 800 },
    { src: img5, width: 1100, height: 850 },
    { src: img6, width: 800, height: 800 },
    { src: img7, width: 1200, height: 900 },
    { src: img8, width: 750, height: 700 },
    { src: img9, width: 1000, height: 800 },
    { src: img10, width: 900, height: 700 },
    { src: img11, width: 850, height: 1150 },
    { src: img12, width: 1100, height: 900 },
    { src: img13, width: 1000, height: 750 },
    { src: img14, width: 850, height: 1050 },
    { src: img15, width: 1200, height: 850 },
    { src: img16, width: 900, height: 1200 },
    { src: img17, width: 1100, height: 700 },
    { src: img18, width: 800, height: 950 },
    { src: img19, width: 1000, height: 1100 },
    { src: img20, width: 950, height: 800 },
    { src: img21, width: 1200, height: 950 },
    { src: img22, width: 800, height: 1000 },
    { src: img23, width: 1000, height: 850 },
    { src: img24, width: 900, height: 1150 },
  ];

  const initialPhotos = photosData.slice(0, PAGE_SIZE);

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxPhotos, setLightboxPhotos] = useState(initialPhotos);

  const fetchPhotos = async (index) => {
    await new Promise((r) => setTimeout(r, 600));

    const start = (index * PAGE_SIZE) % photosData.length;
    const end = start + PAGE_SIZE;

    let page = photosData.slice(start, end);

    if (page.length < PAGE_SIZE) {
      page = page.concat(photosData.slice(0, PAGE_SIZE - page.length));
    }

    setLightboxPhotos((prev) => [...prev, ...page]);

    return page;
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl bg-linear-to-br from-blue-50/50 via-white to-purple-50/50">
      <InfiniteScroll
        photos={initialPhotos}
        fetch={fetchPhotos}
        singleton
        onClick={({ index }) => {
          setCurrentIndex(index);
          setOpen(true);
        }}
        loading={
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
        finished={
          <div className="text-center py-8 text-gray-500 italic">
            You've seen all the moments! ✨
          </div>
        }
      >
        <MasonryPhotoAlbum
          photos={initialPhotos}
          spacing={16}
          columns={(w) => (w < 640 ? 1 : w < 768 ? 2 : w < 1024 ? 3 : 4)}
        />
      </InfiniteScroll>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={lightboxPhotos.map((p) => ({ src: p.src }))}
      />
    </div>
  );
};

export default GalleryImages;
