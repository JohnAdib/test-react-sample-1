import React from "react";
import H1 from "./../atoms/H1";
import Input from "./../atoms/Input";

class BoardTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    let h1Class = "font-bold truncate " + this.props.color;

    return (
      <div className='flex flex-row flwx-nowrap justify-center flex-none items-center gap-1 lg:gap-2 px-2 leading-7 rounded transition hover:bg-white/20 focus:bg-white/40'>
        <H1 className={h1Class}>{this.props.children}</H1>

        <Input
          type='text'
          value={this.props.children}
          placeholder='Enter board title'
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default BoardTitle;
