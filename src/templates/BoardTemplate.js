import React from "react";
import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

class BoardTemplate extends React.Component {
  constructor(props) {
    super(props);
    const myData = { ...this.props.data };
    this.state = { value: myData.title };
    this.handleBoardTitleChange = this.handleBoardTitleChange.bind(this);
  }

  handleBoardTitleChange(event) {
    this.setState({ value: event.target.value });
    // this.props.
  }

  render() {
    const myData = { ...this.props.data };

    myData.events = {
      onChangeBoardTitle: this.handleBoardTitleChange
    };

    myData.title = this.state.value;

    let pageStyle =
      "h-screen select-none flex flex-col bg-[" + myData.background + "]";
    // bg-[#0079bf] bg-[#00aecc]

    return (
      <div className={pageStyle}>
        <BoardHeader
          data={myData}
          onChangeBoardTitle={myData.events.onChangeBoardTitle}
        />
        <BoardLists data={myData.lists} />
      </div>
    );
  }
}

export default BoardTemplate;
