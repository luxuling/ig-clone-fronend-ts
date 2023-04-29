import * as React from 'react';

export default function useFormChecker({ state }: any) {
  const [isDisabled, setIsDisabled] = React.useState(true);
  React.useEffect(() => {
    const isFill: any = [];
    Object.keys(state).forEach((key) => {
      if (state[key].length !== 0) {
        isFill.push(true);
      } else {
        isFill.push(false);
      }
    });
    if (isFill.includes(false)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [state]);
  return isDisabled;
}
