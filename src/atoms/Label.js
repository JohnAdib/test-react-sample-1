function Label(props) {
  return (
    <Label for={props.for} className={props.className}>
      {props.children}
    </Label>
  );
}

export default Label;
