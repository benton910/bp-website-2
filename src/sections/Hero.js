import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Hero = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <div className="w-full py-10 md:py-0">
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-5/6">
        <div className="flex flex-col items-center justify-center md:pt-10 mx-auto md:w-4/5 z-10">
          <h1 className="font-extrabold text-center">
            <span className="block text-5xl md:text-7xl text-blue-600/90">Americana Soul</span>
            <span className="block text-3xl md:text-5xl text-blue-50">from Memphis, TN</span>
          </h1>
          <p className="mt-7 text-center text-gray-100 text-sm">
            Singer, Songwriter, Guitar, and Bass
          </p>
        </div>
        <div className="flex items-center justify-center pt-5 space-x-5 z-10">
          <Link href="/media" className="px-10 py-3 text-center text-white bg-blue-600 rounded shadow hover:outline">
            Watch Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
