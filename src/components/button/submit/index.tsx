import React, { type ReactElement } from 'react';

interface SubmitProps {
  label: string
  handler: (event: any) => void
}
export default function SubmitButton({ label, handler }: SubmitProps): ReactElement {
  return (
    <button
      type="button"
      onClick={handler}
      className="w-[270px] h-[33px] bg-igBlue/70 rounded-md text-white font-medium"
    >
      {label}
    </button>
  );
}
