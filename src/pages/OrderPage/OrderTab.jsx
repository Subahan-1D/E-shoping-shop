import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
    el: '.custom-pagination', 
  };
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper mt-10"
      >
        {groupedItems.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.map((item) => (
                <ProductCard key={item._id} item={item}></ProductCard>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom pagination container */}
      <div className="custom-pagination mt-4 flex justify-center"></div>
    </div>
  );
};

export default OrderTab;
