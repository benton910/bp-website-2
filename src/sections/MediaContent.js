import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { YouTubeEmbed } from '@next/third-parties/google'

//RETHINK MEDIA
//Could be used instead as a space to put a photo gallery and/or videos section

const MediaContent = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <div className="w-full py-10">
      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0"></script> */}
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-5/6">
        <div className="flex flex-col items-center justify-center pt-10 mx-auto md:w-3/5 z-10">
        </div>
        <div className="flex flex-col items-center justify-center pt-5 space-x-5 z-10">
          <h1 className="text-5xl font-extrabold text-center my-5">
            <span className="text-blue-600">WATCH NOW!</span>
          </h1>
          <div>
            <YouTubeEmbed videoid="Ocs4dC1xEKk" height={400} width={720} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaContent;
