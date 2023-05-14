import Image from 'next/image';
import React from 'react';

export default function StoryCard({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="bg-white h-[62px] w-[62px] rounded-full flex justify-center items-center bg-gradient-to-tr from-orange-300 from-30% via-red-500 via-5% to-purple-600 to-56% flex-shrink-0">
      <Image
        src={imageUrl}
        alt="story acc"
        width={100}
        height={100}
        className="rounded-full h-[56px] w-[56px] overflow-hidden"
      />
    </div>
  );
}
