import React from "react";
import GalleryImages from "../Components/Gallery/GalleryImages";
import { Camera, Image } from "lucide-react";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="w-12 h-12 animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-bold">Institute Gallery</h1>
            </div>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Explore the vibrant moments and memories captured at our institute. 
              From academic achievements to cultural celebrations.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-white/80">
              <Image className="w-4 h-4" />
              <span>24 Photos</span>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Gallery Component */}
      <GalleryImages />
    </div>
  );
};

export default Gallery;
