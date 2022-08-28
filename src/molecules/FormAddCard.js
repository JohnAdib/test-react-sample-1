import React, { useState } from "react";
import Input from "./../atoms/Input";
import Button from "./../atoms/Button";
import IconPlus from "./../atoms/IconPlus";

function FormAddCard(props) {
  const [isFormVisible, setActive] = useState(false);
  const showEditInput = () => {
    setActive(true);
  };
  const hideEditInput = (e) => {
    if (
      e.relatedTarget &&
      e.relatedTarget.parentNode.constructor.name === "HTMLFormElement"
    ) {
      if (!e.target.value) {
        e.target.focus();
      }
      return true;
    }
    setActive(false);
  };

  let newListContainer = "relative rounded transition ease-in-out	p-1";
  let addAnotherListClass =
    "flex w-full flex-row flex-nowrap relative flex-none items-center rounded px-2 cursor-pointer transition text-white leading-8";
  let formClass = "flex1 flex-row gap-1 rounded";

  if (isFormVisible) {
    newListContainer += " bg-slate-100 ";
    addAnotherListClass += " hidden";
  } else {
    newListContainer += " bg-white/20 hover:bg-white/30 focus:bg-white/40 ";
    formClass += " hidden";
  }

  return (
    <div className={newListContainer}>
      <div className={addAnotherListClass} onClick={showEditInput}>
        <IconPlus size='26' />
        <span className='grow'>Add another list</span>
      </div>

      <form className={formClass} onSubmit={props.onSubmitNewList}>
        <Input
          type='text'
          value={props.inputAddNewList}
          placeholder='Enter list title...'
          onChange={props.onChangeInputAddNewList}
          onBlur={hideEditInput}
          className='w-full grow mb-1 leading-9'
        />
        <Button className='px-3 py-1 rounded leading-7 bg-blue-600 hover:bg-blue-800 text-white'>
          Add list
        </Button>
      </form>
    </div>
  );
}

export default FormAddCard;
