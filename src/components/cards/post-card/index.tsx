import { Icon } from '@iconify/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import React from 'react';

export default function PostCard({ images }: { images: [] }) {
  return (
    <div className="md:w-[468px]">
      <header className="h-[60px] flex items-center gap-3 px-3">
        <div className="h-[32px] w-[32px] rounded-full overflow-hidden flex justify-center items-center bg-red-400">
          <Image src="/assets/images/birthday.png" alt="photo profile" height={50} width={50} />
        </div>
        <h1 className="font-semibold text-[14px]">usernameacc</h1>
        <button type="button" className="ml-auto text-[27px]">
          <Icon icon="ic:outline-more-horiz" />
        </button>
      </header>
      <div>
        <Splide>
          {images.map((image, index) => (
            <SplideSlide key={`image slide ${index}`}>
              <Image
                key={`image-${index}`}
                src={image}
                alt="post"
                width={300}
                height={300}
                className="w-full"
                priority
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="h-[54px] w-full px-3 flex items-center gap-3">
        <button type="button" className="text-[24px]">
          <Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" />
        </button>
        <button type="button" className="text-[24px] scale-x-[-1]">
          <Icon icon="uil:comment" />
        </button>
        <button type="button" className="text-[24px] rotate-12">
          <Icon icon="eva:paper-plane-outline" />
        </button>
        <button type="button" className="text-[24px] ml-auto">
          <Icon icon="icons8:bookmark" />
        </button>
      </div>
      <div className="px-3">
        <h1 className="text-[14px] font-semibold">123 suka</h1>
        <h1 className="text-[14px] font-semibold">
          usernameacc <span className="font-normal">reactjs ts inputs handler</span>
        </h1>
      </div>
    </div>
  );
}
