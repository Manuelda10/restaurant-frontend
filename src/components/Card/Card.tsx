type CardProps = {
  title: string;
  description: string;
  price: number;
  discount: number;
  imgURL: string;
};

const Card = ({ title, price, discount, imgURL }: CardProps) => (
  <div className="rounded-md shadow-xl min-w-48 max-w-80 relative">
    <img className="w-full object-cover aspect-square rounded-md" src={imgURL} alt="food"/>
    <div className="px-4 py-2">
      <p className="font-semibold text-xl text-orange-500">S/.{price}.00</p>
      <h3 className="font-semibold text-xl text-blue-950">{title}</h3>
      <div className="absolute top-0 right-4 bg-red-700 rounded-b-lg p-4">
        <p className="text-2xl text-white font-semibold">-{discount}%</p>  
      </div>
      <div className="flex justify-start mt-2 w-100">
        <button className="rounded-md bg-orange-500 py-2 px-4 text-white hover:bg-gray-950 transition duration-300 font-medium" >Agregar al carrito</button>
      </div>
    </div>
  </div>
);

export default Card;