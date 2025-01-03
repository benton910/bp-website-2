import { useState } from 'react';
import { useSession } from 'next-auth/react';
import MerchCard from '@/components/MerchCard';


//Need to integrate with Stripe to get the product details?

const StoreContent = () => {
  const { status: sessionStatus } = useSession();
  const [showMerchMenu, setMerchMenuVisibility] = useState(false);

  const toggleMerchMenu = () => setMerchMenuVisibility(!showMerchMenu);

  return (
    <div className="w-full md:py-10">
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-5/6">
        <div className="flex flex-col items-center justify-center md:pt-10 mx-auto z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center">
            <span className="block uppercase tracking-widest font-bold text-blue-600">MERCHANDISE</span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto z-10">
          <MerchCard
            title="'Steppin' Out' CD"
            price="$20.00"
            description="Benton Parker's debut album, 'Steppin' Out', on CD"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreContent;
