import { useState } from 'react';
import { YouTubeEmbed } from '@next/third-parties/google'

//RETHINK MEDIA
//Could be used instead as a space to put a photo gallery and/or videos section

const MediaContent = () => {
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <div className="w-full md:py-10">
      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0"></script> */}
      <div className="relative flex flex-col px-7 mx-auto md:w-5/6">
        <div className="flex flex-col items-center justify-center space-x-5 z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-5">
            <span className="text-blue-600 tracking-wider">WATCH NOW!</span>
          </h1>
          <div className='w-full md:w-5/6 max-w-[720px] mt-10'>
            <YouTubeEmbed videoid="aCBNg3pDPT0" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-center my-1 text-blue-600 tracking-widest bg-black/60 px-3 py-3">Live @ Railgarten</h2>
          </div>
          <div className='w-full md:w-5/6 max-w-[720px] mt-20'>
            <YouTubeEmbed videoid="Ocs4dC1xEKk" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-center my-1 text-blue-600 tracking-widest bg-black/60 px-3 py-3">Live @ Momma's</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaContent;
