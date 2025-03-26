import React, { useRef, useEffect } from "react";

interface IndeterminateCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  indeterminate: boolean;
}

const IndeterminateCheckbox: React.FC<IndeterminateCheckboxProps> = ({
  indeterminate,
  ...rest
}) => {
  const ref = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return <input type="checkbox" ref={ref} {...rest} />;
};

export default IndeterminateCheckbox;
