import { RaceBy } from '@uiball/loaders';
import React, { type ReactElement } from 'react';

interface SubmitProps {
  label: string;
  isDisabled: boolean;
  isLoading: boolean;
  handler: (event: any) => void;
}
export default function SubmitButton({
  label,
  handler,
  isDisabled,
  isLoading,
}: SubmitProps): ReactElement {
  return (
    <button
      type="button"
      onClick={handler}
      disabled={isDisabled}
      className={`w-[270px] h-[33px] rounded-md text-white font-medium flex justify-center items-center ${
        isDisabled ? 'bg-igBlue/30' : 'bg-igBlue/70'
      }`}
    >
      {isLoading ? <RaceBy color="white" /> : label}
    </button>
  );
}
