import React, { useState } from "react";
import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

class BoardTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData: this.props.data,
      inputAddNewList: ""
    };

    this.handleBoardTitleChange = this.handleBoardTitleChange.bind(this);

    this.handleChangeInputAddNewList =
      this.handleChangeInputAddNewList.bind(this);
    this.handleSubmitNewList = this.handleSubmitNewList.bind(this);
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

  handleChangeInputAddNewList(event) {
    this.setState({ inputAddNewList: event.target.value });
  }

  handleSubmitNewList(event) {
    event.preventDefault();
    const myData = { ...this.state.boardData };
    let newTitle = this.state.inputAddNewList;
    if (!newTitle) {
      return;
    }

    const newListArr = {
      id: myData.lists.length + 1,
      title: newTitle,
      cards: []
    };
    myData.lists.push(newListArr);
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
          onSubmitNewList={this.handleSubmitNewList}
          inputAddNewList={this.state.inputAddNewList}
          onChangeInputAddNewList={this.handleChangeInputAddNewList}
        />
      </div>
    );
  }
}

export default BoardTemplate;
