import { Geist, Geist_Mono } from "next/font/google";
import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import { Hero } from '@/sections/index';
import Carousel from '@/components/Carousel';

import soloShot1 from '../../public/images/PROMOcopy/SOLOCOMP.jpg';
import soloShot2 from '../../public/images/PROMOcopy/SOLOCOMP2.jpg'
import highResPoster from '../../public/images/PROMOcopy/HANKFISH/Poster18x28.png'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Should be 3 images: 1 of me singing, 1 of me playing guitar, 1 of me playing bass
const images = [
  { src: soloShot1, alt: "Solo BP Image 1" },
  { src: soloShot2, alt: "Solo BP Image 2" },
  { src: highResPoster, alt: "High Res Poster" }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Benton Parker',
  image: soloShot1,
  description: 'Americana Soul from Memphis, TN',
}

const Home = () => {
  return (
    <>
      <LandingLayout>
        <Meta
          title="BCP Music"
          description="Benton Parker's Music Page"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Carousel images={images} />
        <Hero />
      </LandingLayout>
    </>
  );
};

export default Home;
