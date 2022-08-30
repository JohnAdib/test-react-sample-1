function Select(props) {
  const options = props.options.map((x) => <option value={x}>{x}</option>);

  console.log(options);

  return (
    <select id={props.id} className={props.className} onClick={props.onClick}>
      {options}
    </select>
  );
}

export default Select;
