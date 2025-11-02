import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import cse from "../../assets/cse.jpeg";
import civil from "../../assets/civil.jpeg";
import electrical from "../../assets/electrical.jpeg";
import mechanical from "../../assets/mechanical.jpeg";
import power from "../../assets/power.jpeg";
import rac from "../../assets/rac.jpeg";

function Swipper() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-200">
      {/* Fixed Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Welcome to Bogura Polytechnic Institute
        </h1>
        <p className="mt-4 text-lg md:text-xl font-semibold text-black max-w-xl">
          This text stays fixed while the background images slide.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        speed={1000}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-full"
      >
        {/* Example slides with background images */}
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-full">
            <img className="w-full" src={cse} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-full">
            <img className="w-full" src={civil} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-full">
            <img className="w-full" src={electrical} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-full">
            <img className="w-full" src={mechanical} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-full">
            <img className="w-full" src={power} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-full">
            <img className="w-full" src={rac} />
          </div>
        </SwiperSlide>

        {/* Progress Circle */}
        <div className="autoplay-progress absolute bottom-4 right-4 items-center gap-2 text-white z-30 hidden">
          <svg viewBox="0 0 48 48" ref={progressCircle} className="w-8 h-8">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default Swipper;
