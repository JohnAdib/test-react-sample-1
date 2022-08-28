import React from "react";
import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

class BoardTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData: { ...this.props.data }
    };

    this.handleBoardTitleChange = this.handleBoardTitleChange.bind(this);
  }

  handleBoardTitleChange(event) {
    const myData = { ...this.state.boardData };
    myData.title = event.target.value;

    this.props.setData(myData);
    this.setState({ boardData: myData });
  }

  render() {
    const myData = { ...this.state.boardData };

    myData.events = {
      onChangeBoardTitle: this.handleBoardTitleChange
    };

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
