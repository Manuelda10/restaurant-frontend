interface SlideProps {
  image: string;
}

const Slide: React.FC<SlideProps> = ({ image }) => {
  return (
    <div className="flex-shrink-0 w-full">
      <img src={image} loading="lazy" className="w-full h-[32rem] sm:h-[40rem] object-cover" alt="slide" />
    </div>
  );
}

export default Slide;