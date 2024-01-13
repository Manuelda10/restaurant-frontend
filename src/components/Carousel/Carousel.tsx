import { useState } from "react";
import Slide from "./Slide";
import left from '/assets/left.svg';
import right from '/assets/right.svg';

interface CarouselProps {
  slides: Array<{
    image: string;
  }>;
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <Slide key={index} {...slide} />
        ))}
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 " onClick={goToPrevious}>
        <img src={left} width="40" height="40"></img>
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={goToNext}>
        <img src={right} width="40" height="40"></img>
      </button>
    </div>
  );
};

export default Carousel;