import Carousel from "../../components/Carousel/Carousel";

const Home = () => {

  const slides = [
    {
      image: '/assets/img-dummy.jpg'
    },
    {
      image: '/assets/img-dummy2.jpg'
    },
    {
      image: '/assets/img-dummy3.jpg'
    }
  ];

  return (
    <div className="">
      <div className=" ">
        <Carousel slides={slides} />  
      </div>
    </div>
  );
}

export default Home