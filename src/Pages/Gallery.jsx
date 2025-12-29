import React from "react";
import GalleryImages from "../Components/Gallery/GalleryImages";
import { Camera, Image } from "lucide-react";

const Gallery = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            🖼️ Institute Gallery
          </h2>
          <p className="text-base-content/80 leading-relaxed text-lg text-center">
            Explore the vibrant moments and memories captured at our institute.
            From academic achievements to cultural celebrations, witness the
            vibrant life of <strong className="text-primary">Bogura Polytechnic Institute</strong>.
          </p>

          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <span className="badge badge-primary badge-lg">Infinite Scroll</span>
            <span className="badge badge-secondary badge-lg">Masonry Grid</span>
            <span className="badge badge-accent badge-lg">Interactive</span>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Gallery Component */}
        <GalleryImages />
      </div>
    </section>
  );
};

export default Gallery;
