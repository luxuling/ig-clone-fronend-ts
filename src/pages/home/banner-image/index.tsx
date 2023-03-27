/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import React, { useState, type ReactElement, useEffect } from 'react';
import imageBanner from '@lib/data/image-banner.json';

export default function BannerImage(): ReactElement {
  const [showedImage, setShowedImage] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowedImage(showedImage + 1);
      if (showedImage >= 3) {
        setShowedImage(0);
      }
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [showedImage]);

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
      <div className="absolute top-5 -right-[80px] w-[290px] h-[570px] flex items-center justify-center overflow-hidden z-20">
        <Image
          alt="iphone mockup"
          src="/assets/images/iphone-mockup.png"
          height={400}
          width={200}
          className="absolute h-full w-full top-0 z-20"
        />
        <div
          style={{
            backgroundImage: `url(${imageBanner[showedImage].src})`,
          }}
          className="w-[89%] h-[95%] bg-cover bg-center transition-all ease-in-out duration-[2000ms]"
        />
      </div>
    </div>
  );
}
