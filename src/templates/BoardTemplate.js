import React from "react";
import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

class BoardTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData: this.props.data
    };

    this.handleBoardTitleChange = this.handleBoardTitleChange.bind(this);
  }

  handleBoardTitleChange(event) {
    const myData = { ...this.state.boardData };
    let newTitle = event.target.value;
    if (!newTitle) {
      newTitle = "Board Title";
    }
    myData.title = newTitle;
    this.setState({ boardData: myData });
    this.props.onBoardDataChange(myData);
  }

  handleAddNewList(event) {
    console.log(222);
    const myData = { ...this.state.boardData };
    let newTitle = event.target.value;
    if (!newTitle) {
      return;
    }
    myData.title = newTitle;
    console.log(typeof myData);
    this.setState({ boardData: myData });
    this.props.onBoardDataChange(myData);
  }

  render() {
    let pageStyle =
      "h-screen overflow-hidden select-none flex flex-col bg-[" +
      this.state.boardData.background +
      "]";
    // bg-[#0079bf] bg-[#00aecc]

    return (
      <div className={pageStyle}>
        <BoardHeader
          data={this.state.boardData}
          onChangeBoardTitle={this.handleBoardTitleChange}
        />
        <BoardLists
          data={this.state.boardData.lists}
          onAddNewList={this.handleAddNewList}
        />
      </div>
    );
  }
}

export default BoardTemplate;
