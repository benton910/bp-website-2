import { useState } from 'react';
import { useSession } from 'next-auth/react';

import Image from 'next/image';
import soloShot1 from '../../public/images/PROMOcopy/SOLOCOMP.jpg';
import soloShot2 from '../../public/images/PROMOcopy/SOLOCOMP2.jpg'

const AboutContent = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-full">
        <div className="flex flex-col items-center justify-center mx-auto w-full z-10 bg-slate-400/60 rounded-lg">
          <h3 className="text-5xl font-extrabold m-16 px-5 py-4 text-center text-blue-600 bg-black/70 rounded-md">
            A Journey of Soul and Blues
          </h3>
          <div className="flex flex-row items-center justify-center mx-auto md:w-full z-10">
            <div className="relative flex items-center justify-center ml-5 mr-2 my-auto w-full h-full z-10">
              <Image
                src={soloShot1}
                alt='Picture of Benton'
                className='object-cover'
              />
            </div>
            <div className="flex flex-col p-5 items-center justify-center mx-auto z-10">
              <p className="pt-3 pb-3 pl-5 pr-5 text-center text-black">
                Benton Parker, a rising force in the Americana scene, hails from the vibrant musical landscapes of Memphis, TN. At just 28 years old, Benton has carved out a significant space in the music world, earning acclaim for his raw, soulful vocals and dynamic performances.
              </p>
              <p className="pt-3 pb-3 pl-5 pr-5 text-center text-black">
                Born and raised in Jackson, MS, Benton spent his formative years immersed in the rich musical heritage of the South. From an early age, Benton was drawn to music. He found inspiration in the legendary Elvis Presley after a life-changing visit to Graceland at the age of five. This early fascination with Elvis sparked a deep love for the performing arts and set the stage for Benton’s future in music.
              </p>
              <p className="pt-3 pb-3 pl-5 pr-5 text-center text-black">
                In 2014, Benton moved to Memphis to attend college. It was here that he picked up the guitar and continued to refine his vocal talents, performing in various bands and choirs. After college, Benton decided to fully embrace his passion, becoming a full-time professional musician in 2021. His journey as a musician is marked by his roles as a singer/songwriter, guitarist, and bass player.
              </p>
            </div>
          </div>
          <h3 className="text-5xl font-extrabold m-16 px-5 py-4 text-center text-blue-600 bg-black/70 rounded-md">
            Musical Ventures
          </h3>
          <div className="flex flex-row items-center justify-center mx-auto md:w-full z-10">
            <div className="flex flex-col p-5 items-center justify-center mx-auto z-10">
              <p className="pt-3 pb-3 pl-5 pr-5 text-center text-black">
                Benton fronts his own band, Benton Parker & The Royal Reds, where he showcases his talent as a lead vocalist and guitarist. Known for his deeply emotive and genuine performances, Benton brings a powerful energy to every show, captivating audiences with his ability to convey raw emotion through his music. His soulful voice and compelling songwriting create a unique and unforgettable experience for listeners, often bringing them to tears and getting them up on their feet to dance.
              </p>
              <p className="pt-3 pb-3 pl-5 pr-5 text-center text-black">
                As a bassist, Benton collaborates with some of the most talented young blues musicians on the scene today. He tours nationally and internationally with Tony Holiday, a well-known blues musician, and frequently performs with Wyly Bigger, Jad Tariq, and Jon Hay in Memphis and beyond. Benton’s bass playing is characterized by a strong presence in the low end, utilizing a heavy right hand on flat wound strings to create a thumping rhythm, complemented by exciting walking lines and tasteful note choices. His approach lays a solid foundation for the band, allowing the rest of the musicians to shine.
              </p>
            </div>
            <div className="relative flex items-center justify-center mr-5 ml-2 my-auto w-full h-full z-10">
              <Image
                src={soloShot2}
                alt='Picture of Benton'
                className='object-cover'
              />
            </div>
          </div>
          <h3 className="text-5xl font-extrabold m-16 px-5 py-4 text-center text-blue-600 bg-black/70 rounded-md">
            Influences and Inspirations
          </h3>
          <div className="flex flex-row items-center justify-center mx-auto md:w-full z-10">
            <div className="relative flex items-center justify-center ml-5 mr-2 my-auto w-full h-full z-10">
              <Image
                src={soloShot1}
                alt='Picture of Benton'
                className='object-cover'
              />
            </div>
            <div className="flex flex-col p-5 items-center justify-center mx-auto z-10">
              <p className="pt-3 pb-3 pl-5 pr-5 text-center text-black">
                Growing up in the culturally rich environment of Jackson, MS, and later immersing himself in the musical heritage of Memphis, Benton’s sound is heavily influenced by the blues and soul traditions of the South. The vibrant music scenes of these regions, combined with his personal experiences and emotional depth, have shaped his unique style. Benton believes in the power of genuine emotion and strives to communicate this through his music, connecting with audiences on a profound level.
              </p>
              <p className="pt-3 pb-3 pl-5 pr-5 text-center text-black">
                Benton’s performances are known for their high energy and emotional authenticity. He is skilled at communicating with his audience, providing honest and vulnerable explanations of his emotional experiences through song. His ability to listen and respond to the musical environment around him ensures that every performance is a memorable and engaging experience.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mx-auto mt-10 md:w-full z-10">
            <div className="flex flex-col p-5 items-center justify-center mx-auto z-10">
              <p className="pt-3 pb-3 pl-5 pr-5 text-center text-black">
                With a dedication to his craft and a passion for connecting with audiences, Benton Parker continues to make waves with his music. His commitment to bringing real emotion to every performance and his ability to blend the sounds of many American music traditions with contemporary elements make him a standout artist to watch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
