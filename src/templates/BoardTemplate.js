import React from "react";
import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

class BoardTemplate extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;

    this.state = { value: data.title };

    this.handleBoardTitleChange = this.handleBoardTitleChange.bind(this);
  }

  handleBoardTitleChange(event) {
    this.setState({ value: event.target.value });
    console.log("change title");
  }

  render() {
    const { data } = this.props;

    data.events = {
      onChangeBoardTitle: this.handleBoardTitleChange
    };

    data.title = this.state.value;

    let pageStyle =
      "h-screen select-none flex flex-col bg-[" + data.background + "]";
    // bg-[#0079bf] bg-[#00aecc]

    return (
      <div className={pageStyle}>
        <BoardHeader
          data={data}
          onChangeBoardTitle={data.events.onChangeBoardTitle}
        />
        <BoardLists data={data.lists} />
      </div>
    );
  }
}

export default BoardTemplate;
