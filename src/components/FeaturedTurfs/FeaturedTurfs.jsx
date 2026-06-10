import "./FeaturedTurfs.css";

import TurfCard from "./TurfCard";
import turfData from "../../Data/turfData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function FeaturedTurfs() {
  return (
    <section className="featured-turfs">

      <div className="section-header">
        <h2>Featured Turfs</h2>
        <p>
          Discover premium sports facilities near you.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={25}
        slidesPerView={3}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0, 
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {turfData.map((turf) => (
          <SwiperSlide key={turf.id}>
            <TurfCard {...turf} />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default FeaturedTurfs;