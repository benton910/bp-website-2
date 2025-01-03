import Image from 'next/image';
import catfishImg from '../../../public/images/PROMOcopy/HANKFISH/cutoutfish1_comp.png';

const CatfishBg = ({ children, className, ...rest }) => {
  return (
    <div className="h-full w-full md:h-5/6 md:w-5/6 top-48 left-0 md:top-72 md:left-12 absolute z-0 opacity-20 align-center">
      <Image
        src={catfishImg}
        alt="Picture of catfish"
        className='object-cover'
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  );
};

export default CatfishBg;