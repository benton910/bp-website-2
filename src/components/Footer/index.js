import Image from 'next/image';
import instaIcon from '../../public/images/PROMOcopy/SOCIAL/IMG_3642_LE_auto_x2.png';
import fbIcon from '../../public/images/PROMOcopy/SOCIAL/IMG_5378_LE_auto_x2.png';
import youtubeIcon from '../../public/images/PROMOcopy/SOCIAL/Youtube_logo_LE_auto_x2.png';
import venmoIcon from '../../public/images/PROMOcopy/SOCIAL/IMG_8140_LE_auto_x2.png';
import cashappIcon from '../../public/images/PROMOcopy/SOCIAL/IMG_4102_LE_auto_x2.png';

const Footer = () => {
  return (
    <div className="w-full pt-5 md:pt-24 md:pb-10">
      <div className="relative flex flex-col items-center md:mx-auto md:w-5/6">
        <footer className="flex flex-row items-center justify-between py-5 space-x-0 border-b md:space-y-0 md:space-x-3">
          <a href="https://www.instagram.com/bentonparkermusic" target="_blank" className="px-4 md:px-10 py-2 rounded hover:scale-125 duration-300">
            <Image
              src={instaIcon}
              alt="Instagram icon"
              className='w-11 md:w-14'
            />
          </a>
          <a href="https://www.facebook.com/benton.parker.92/" target="_blank" className="px-4 md:px-10 py-2 rounded hover:scale-125 duration-300">
            <Image
              src={fbIcon}
              alt="Facebook icon"
              className='w-11 md:w-14'
            />
          </a>
          <a href="https://www.youtube.com/@bentonparkermusic/videos" target="_blank" className="px-4 md:px-10 py-2 rounded hover:scale-125 duration-300">
            <Image
              src={youtubeIcon}
              alt="Youtube icon"
              className='w-11 md:w-16'
            />
          </a>
          <a href="/" target="_blank" className="px-4 md:px-10 py-2 rounded hover:scale-125 duration-300">
            <Image
              src={venmoIcon}
              alt="Venmo icon"
              className='w-11 md:w-14'
            />
          </a>
          <a href="/" target="_blank" className="px-4 md:px-10 py-2 rounded hover:scale-125 duration-300">
            <Image
              src={cashappIcon}
              alt="CashApp icon"
              className='w-11 md:w-14'
            />
          </a>
        </footer>
        <p className="py-5 text-center text-gray-400">
          &copy;Benton Parker Music. All rights reserved {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
