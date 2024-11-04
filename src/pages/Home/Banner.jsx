import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import img2 from "../../assets/images/banner/images.jpeg";

const Banner = () => {
  return (
    <Carousel>
    
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img2} />
      </div>
    </Carousel>
  );
};

export default Banner;
