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

  let h1Class = "font-semibold truncate cursor-text " + props.color;
  let inputClass = "absolute inset-0 font-semibold z-10";
  if (!isShowInput) {
    inputClass += " hidden";
  }

  return (
    <div className='flex flex-row flwx-nowrap relative flex-none items-center gap-1 lg:gap-2 px-2 rounded transition hover:bg-white/20 focus:bg-white/40'>
      <div className={h1Class} onClick={showEditInput}>
        {props.children}
      </div>

      <Input
        type='text'
        value={props.children}
        placeholder={props.children}
        onChange={props.onChange}
        onBlur={hideEditInput}
        className={inputClass}
      />
    </div>
  );
}

export default ClickToEdit;
