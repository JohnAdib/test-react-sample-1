import React, { useState } from "react";
import Input from "../atoms/Input";

function ClickToEdit(props) {
  const [isShowInput, setActive] = useState(false);
  const showEditInput = () => {
    // setActive(!isShowInput);
    setActive(true);
  };
  const hideEditInput = () => {
    setActive(false);
  };

  let divClass = "truncate cursor-text";
  if (props.color) {
    divClass += props.color;
  }
  let inputClass = "absolute inset-0 z-10";
  if (!isShowInput) {
    inputClass += " hidden";
  }

  return (
    <div className='flex flex-row flwx-nowrap relative flex-none items-center gap-1 lg:gap-2 px-2 rounded transition hover:bg-white/20 focus:bg-white/40'>
      <div className={divClass} onClick={showEditInput}>
        {props.children}
      </div>

      <Input
        type='text'
        value={props.value}
        placeholder={props.children}
        onChange={props.onChange}
        onBlur={hideEditInput}
        className={inputClass}
        parent={props.parent}
      />
    </div>
  );
}

export default ClickToEdit;
