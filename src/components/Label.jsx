const Label = ({ labelText, htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className={`flex items-center gap-2`}>
      {children}
      <span>{labelText}</span>
    </label>
  );
};

export default Label;
