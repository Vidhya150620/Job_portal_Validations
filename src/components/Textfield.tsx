import { forwardRef, HTMLProps } from "react";

interface TextFieldProps extends HTMLProps<HTMLInputElement> {
  // error: any;
  // Add any additional props specific to TextField
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  return (
    <>
      <input ref={ref} {...props} />
      {/* {props.error && <div className="error-message">{props.error}</div>} */}
    </>
  );
});

export default TextField;
