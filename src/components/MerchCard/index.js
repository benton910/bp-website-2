
//Figure out how to get images of the merch in each card

import Link from "next/link";

const MerchCard = (merchCardProps) => {
  return (
    <div className="flex w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
      <div>
        <div className="flex flex-col items-center p-8">
          <div className="uppercase tracking-wide text-2xl text-blue-600 font-semibold">{merchCardProps.title}</div>
          <p className="mt-4 text-lg leading-tight font-medium text-black">{merchCardProps.price}</p>
          <p className="mt-2 text-gray-500">{merchCardProps.description}</p>
          <Link href="/payment">
            <p className="m-2 p-2 text-blue-600/90 bg-gray-500/30 rounded-md hover:scale-125 duration-300">Buy Now!</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MerchCard;