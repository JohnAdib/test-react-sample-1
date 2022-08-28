import React, { useState } from "react";
import H1 from "./../atoms/H1";
import Input from "./../atoms/Input";

function BoardTitle(props) {
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
    <div className='flex flex-row flwx-nowrap relative flex-none items-center gap-1 lg:gap-2 px-2 leading-7 rounded transition hover:bg-white/20 focus:bg-white/40'>
      <H1 className={h1Class} onClick={showEditInput}>
        {props.children}
      </H1>

      <Input
        type='text'
        value={props.children}
        placeholder='Enter board title'
        onChange={props.onChangeBoardTitle}
        onBlur={hideEditInput}
        className={inputClass}
      />
    </div>
  );
}

export default BoardTitle;
