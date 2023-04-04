import React, { type ReactElement } from 'react';

interface Iinput {
  placeholder: string;
  type: string;
  id: string;
  handler: (value: object) => void;
}
export default function LoginInput({ placeholder, id, handler, type }: Iinput): ReactElement {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="h-[38px] w-[270px] outline-none border border-lineGrey placeholder:text-xs bg-bgGrey rounded-[3px] px-2"
      onChange={handler}
    />
  );
}
