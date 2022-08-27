function input(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      className={props.className}
      onChange={props.onChange}
    />
  );
}

export default input;
