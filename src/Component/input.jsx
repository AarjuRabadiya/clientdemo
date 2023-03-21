const Input = ({ search, onChange, name, type, className, placeHolder }) => {
  return (
    <input
      className={className}
      type={type}
      value={search}
      name={name}
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
};
export default Input;
