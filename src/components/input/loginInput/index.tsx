import * as React from 'react';

interface InputProps {
  placeholder: string;
  id: string;
  type: string;
  handler: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
const LoginInput: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  handler,
  type,
  id,
  placeholder,
  ...rest
}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="h-[38px] w-[270px] outline-none border border-lineGrey placeholder:text-xs bg-bgGrey rounded-[3px] px-2"
      onChange={handler}
      {...rest}
    />
  );
};
export default LoginInput;
