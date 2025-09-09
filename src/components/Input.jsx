const Input = ({ inputType, inputId, checked, onChange }) => {
  return (
    <input
      className=" rounded border-2 border-gray-400 "
      type={inputType}
      id={inputId}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Input;
