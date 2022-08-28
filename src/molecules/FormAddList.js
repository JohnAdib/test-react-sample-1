import React, { useState } from "react";
import Input from "./../atoms/Input";
import Button from "./../atoms/Button";
import IconPlus from "./../atoms/IconPlus";

function FormAddList(props) {
  const [isShowInput, setActive] = useState(false);
  const showEditInput = () => {
    // setActive(!isShowInput);
    setActive(true);
  };
  const hideEditInput = () => {
    setActive(false);
  };

  let inputClass = "absolute inset-0 font-semibold z-10";
  if (!isShowInput) {
    inputClass += " hidden";
  }

  return (
    <div className='flex w-full flex-row flwx-nowrap relative flex-none items-center gap-1 lg:gap-2 leading-10 rounded transition hover:bg-white/20 focus:bg-white/40'>
      <div
        className='flex w-full flex-row flwx-nowrap relative flex-none items-center rounded px-2 text-white bg-white/20 cursor-pointer'
        onClick={showEditInput}
      >
        <IconPlus size='30' />
        <span className='grow'>Add another list</span>
      </div>

      <Input
        type='text'
        placeholder='Enter list title ...'
        OnChange={props.onAddNewList}
        onBlur={hideEditInput}
        className={inputClass}
      />

      <Button className='p-2'>Add list</Button>
    </div>
  );
}

export default FormAddList;
