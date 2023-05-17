import { Icon } from '@iconify/react';
import React from 'react';
import PlusIcon from '@public/assets/svg/story/plus.svg';

export default function CreateStory() {
  return (
    <div className="w-[64px] flex-shrink-0 flex flex-col items-center h-full justify-between">
      <div className="h-[56px] w-[56px] rounded-full flex bg-white items-center justify-center relative">
        <Icon
          icon="material-symbols:person"
          className="text-[50px] text-black
        "
        />
        <PlusIcon className="absolute -right-[5px] bottom-[3px] bg-white rounded-full" />
      </div>
      <h1 className="text-white text-center text-[12px]">Cerita anda</h1>
    </div>
  );
}
