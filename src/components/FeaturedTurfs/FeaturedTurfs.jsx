import "./FeaturedTurfs.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function FeaturedTurfs() {
  return (
    <section className="featured-turfs">

      <div className="section-header">
        <h2>Elite Managed Turfs</h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={25}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
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

        <SwiperSlide>
          <div className="turf-card">
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800"
              alt=""
            />
            <div className="turf-content">
              <h3>Green Valley Football</h3>
              <p>Premium football turf with floodlights.</p>
              <span>₹1500/hr</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="turf-card">
            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800"
              alt=""
            />
            <div className="turf-content">
              <h3>Slam Dunk Arena</h3>
              <p>Professional indoor basketball court.</p>
              <span>₹1800/hr</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="turf-card">
            <img
              src="https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=800"
              alt=""
            />
            <div className="turf-content">
              <h3>Football Ground</h3>
              <p>Natural grass practice ground.</p>
              <span>₹2500/hr</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="turf-card">
            <img
              src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800"
              alt=""
            />
            <div className="turf-content">
              <h3>Badminton Hub</h3>
              <p>Indoor AC badminton courts.</p>
              <span>₹900/hr</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="turf-card">
            <img
              src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800"
              alt=""
            />
            <div className="turf-content">
              <h3>Elite Tennis Club</h3>
              <p>Professional hard courts.</p>
              <span>₹1200/hr</span>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </section>
  );
}

export default FeaturedTurfs;