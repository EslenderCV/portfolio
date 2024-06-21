import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderImgs = [
  "../../../src/assets/sliderImage.png",
  "../../../src/assets/sliderImage2.png",
];

const Carrousel = () => {
  return (
    <div className="carrousel">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: "" }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="container"
      >
        {sliderImgs.map((item, idx) => {
          return (
            <SwiperSlide>
              <img src={item} key={idx} width="500px" />{" "}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carrousel;
