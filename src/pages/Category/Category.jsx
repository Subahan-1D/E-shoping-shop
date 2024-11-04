import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import cat1 from "../../assets/images/banner/images (1).jpeg";
import cat2 from "../../assets/images/banner/images (2).jpeg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 9:00 AM to  12:00PM"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10 mt-10"
      >
        <SwiperSlide>
          <img className="rounded-md" src={cat1} alt="" />
          <p className="text-xl text-center mr-[60px] -mt-10 text-white font-bold">
            T-Shirt
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={cat1} alt="" />
          <p className="text-xl text-center mr-[60px] -mt-10 text-white font-bold">
            T-Shirt
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={cat1} alt="" />
          <p className="text-xl text-center mr-[60px] -mt-10 text-white font-bold">
            T-Shirt
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={cat2} alt="" />
          <p className="text-xl text-center mr-[60px] -mt-9 text-black font-bold">
            Full-Shirt
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={cat1} alt="" />
          <p className="text-xl text-center mr-[60px] -mt-9 text-white font-bold">
            T-Shirt
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={cat2} alt="" />
          <p className="text-xl text-center mr-[60px] -mt-9 text-black font-bold">
            Full-Shirt
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
