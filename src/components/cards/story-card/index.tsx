import Image from 'next/image';
import React from 'react';

interface Props {
  imageUrl: string;
  username: string;
}
export default function StoryCard({ imageUrl, username }: Props) {
  return (
    <div className="flex-shrink-0 w-[64px] text-white flex flex-col items-center justify-between h-full">
      <div className="bg-white h-[60px] w-[60px] rounded-full flex justify-center items-center bg-gradient-to-tr from-orange-300 from-30% via-red-500 via-5% to-purple-600 to-56%">
        <Image
          src={imageUrl}
          alt="story acc"
          width={100}
          height={100}
          className="rounded-full h-[56px] w-[56px] overflow-hidden border-2 border-black"
        />
      </div>
      <p className="text-[12px] text-ellipsis overflow-hidden w-[64px] text-center">{username}</p>
    </div>
  );
}
