import React from "react";
import H1 from "./../atoms/H1";
import Input from "./../atoms/Input";

class BoardTitle extends React.Component {
  render() {
    let h1Class = "font-semibold truncate " + this.props.color;
    console.log(this.props);
    return (
      <div className='flex flex-row flwx-nowrap justify-center flex-none items-center gap-1 lg:gap-2 px-2 leading-7 rounded transition hover:bg-white/20 focus:bg-white/40'>
        <H1 className={h1Class}>{this.props.children}</H1>

        <Input
          type='text'
          value={this.props.children}
          placeholder='Enter board title'
          onChange={this.props.onChangeBoardTitle}
        />
      </div>
    );
  }
}

export default BoardTitle;
