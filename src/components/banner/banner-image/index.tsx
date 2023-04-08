import Image from 'next/image';
import React, { useState, type ReactElement, useEffect } from 'react';
import imageBanner from '@lib/data/image-banner.json';

export default function BannerImage(): ReactElement {
  const [showedImage, setShowedImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowedImage((prevShowedImage) => {
        if (prevShowedImage >= imageBanner.length - 1) {
          return 0;
        } else {
          return prevShowedImage + 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative hidden lg:block ">
      <div className="relative w-[290px] h-[570px] flex items-center justify-center overflow-hidden">
        <Image
          alt="iphone mockup"
          src="/assets/images/iphone-mockup.png"
          height={400}
          width={200}
          className="absolute h-full w-full top-0 z-20"
        />
        <Image
          alt="screnshot1"
          src="/assets/images/screenshot3.png"
          height={400}
          width={200}
          className="top-0 w-[90%] h-[95%] z-10"
        />
      </div>
      <div className="absolute top-5 -right-[80px] w-[290px] h-[570px] flex items-center justify-center overflow-hidden z-20 rounded-xl">
        <Image
          alt="iphone mockup"
          src="/assets/images/iphone-mockup.png"
          height={400}
          width={200}
          className="absolute h-full w-full top-0 z-20"
        />
        {imageBanner.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={`Image ${index}`}
            width={260}
            height={270}
            className={`absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-in-out ${
              showedImage === index ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
