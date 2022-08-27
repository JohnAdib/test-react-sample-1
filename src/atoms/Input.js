function Input(props) {
  let inputClass = "text-black outline-2 outline-blue-600 rounded px-2";

  return (
    <input
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className={inputClass}
    />
  );
}

export default Input;
