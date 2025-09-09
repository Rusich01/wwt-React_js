const Button = ({ id, className, text, onClick }) => {
  return (
    <button onClick={onClick} id={id} className={className}>
      {text}
    </button>
  );
};

export default Button;
