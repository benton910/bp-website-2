import Image from "next/image";
import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

/**
 * Carousel component using nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = () => {
    setIsReady(true);
  };

  const handleNextSlide = () => {
    setIsReady(false);
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    setIsReady(false);
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="relative bg-black/0 w-full self-center md:pt-10">
      <div className="w-4/5 h-full md:w-2/5 flex overflow-hidden relative m-auto mt-5 mb-5">
        <AiOutlineLeft
          onClick={handlePrevSlide}
          className="invisible md:visible absolute h-full left-0 m-auto text-9xl inset-y-1/2 cursor-pointer text-gray-400/0 z-20"
        />
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Image
                  src={image.src}
                  alt={image.alt}
                  key="img"
                  className={`
                    object-cover bg-gray-400 transition duration-700
                    ${isReady ? 'scale-100 bg-gray-400 blur-0' : 'scale-120 blur-xl'}
                    `}
                  onLoadingComplete={onLoadCallback}
                />
              );
            }
          })}
        </Swipe>
        <AiOutlineRight
          onClick={handleNextSlide}
          className="invisible md:visible absolute h-full right-0 m-auto text-9xl inset-y-1/2 cursor-pointer text-gray-400/0 z-20"
        />
      </div>
    </div>
  );
}