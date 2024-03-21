
const Home = () => {
  return (
    <div className="">
      <div className="flex justify-center bg-sky-950 relative">
        <div className="w-1/2 sm:w-1/3 lg:w-1/2 flex justify-end">
          <img className="object-cover min-w-64" src="/assets/img-banner.png"></img>
        </div>
        <div className="w-1/2 sm:w-1/3 flex justify-start items-center font-semibold text-white text-sm sm:text-md  lg:text-2xl relative">
          <div className="bg-orange-500 flex justify-center items-center rounded-full p-4 lg:p-10 relative">
            <p className="font-extrabold text-xl lg:text-5xl text-pretty italic text-red-700 mr-1 md:mr-2" >10%</p>
            <p> de descuento en tu primera compra </p> 
            <div className="absolute -right-2 sm:-right-8 lg:-right-12 top-8 lg:top-16">
              <img src="/assets/hamburguer.png" className="w-20 lg:w-36"></img>
            </div> 
          </div>   
          
        </div>
        
      </div>
    </div>
  );
}

export default Home