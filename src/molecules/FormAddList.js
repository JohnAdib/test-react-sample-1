import "./../atoms/Input";
import "./../atoms/Button";

function FormAddList(props) {
  return (
    <div>
      <input
        type='text'
        value='Enter list title ...'
        className='bg-blue-100'
        onChnage=''
      />
      <button className='gb-blue-300'>Add list</button>
    </div>
  );
}

export default FormAddList;
