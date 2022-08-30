import Select from "./../atoms/Select";
import Label from "./../atoms/Label";

function Selectbox(props) {
  return (
    <>
      <Label for={props.id} className=''>
        {props.title}
      </Label>
      <Select id={props.id} className='' options={props.options} />
    </>
  );
}

export default Selectbox;
