import { Icon } from '@iconify/react';
import React from 'react';
import PlusIcon from '@public/assets/svg/story/plus.svg';

export default function CreateStory() {
  return (
    <div className="h-[56px] w-[56px] rounded-full flex flex-shrink-0 bg-white items-center justify-center relative">
      <Icon
        icon="material-symbols:person"
        className="text-[50px] text-black
        "
      />
      <PlusIcon className="absolute -right-[5px] bottom-[3px] bg-white rounded-full" />
    </div>
  );
}
