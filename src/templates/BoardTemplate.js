import React from "react";
import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

class BoardTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData: this.props.data,
      inputAddNewList: "",
      inputAddNewCard: ""
    };

    this.handleBoardTitleChange = this.handleBoardTitleChange.bind(this);

    this.handleChangeInputAddNewList =
      this.handleChangeInputAddNewList.bind(this);
    this.handleSubmitNewList = this.handleSubmitNewList.bind(this);
    this.handleChangeListTitle = this.handleChangeListTitle.bind(this);

    this.handleChangeInputAddNewCard =
      this.handleChangeInputAddNewCard.bind(this);
    this.handleSubmitNewCard = this.handleSubmitNewCard.bind(this);
    this.updatePageTitle();
  }

  updatePageTitle() {
    document.title =
      this.state.boardData.title + " | " + this.state.boardData.brand;
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

    this.updatePageTitle();
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
    this.setState({ boardData: myData, inputAddNewList: "" });
    this.props.onBoardDataChange(myData);
  }

  handleChangeListTitle(event) {
    const myData = { ...this.state.boardData };
    let newTitle = event.target.value;
    if (!newTitle) {
      newTitle = "List Title";
    }
    const listId = parseInt(event.target.dataset.parent);
    const listIndex = myData.lists.findIndex((el) => el.id === listId);
    // change title
    myData.lists[listIndex].title = newTitle;

    this.setState({ boardData: myData });
    this.props.onBoardDataChange(myData);
  }

  handleChangeInputAddNewCard(event) {
    this.setState({ inputAddNewCard: event.target.value });
  }

  handleSubmitNewCard(event) {
    event.preventDefault();
    // read parent id to add card
    const listId = parseInt(event.target.dataset.list);
    const myData = { ...this.state.boardData };
    let newTitle = this.state.inputAddNewCard;
    if (!newTitle) {
      return;
    }
    // get index of list
    const listIndex = myData.lists.findIndex((el) => el.id === listId);
    const lastCardId = myData.lists
      .map((x) => x.cards.length)
      .reduce((a, b) => a + b);

    // extract hashtags
    const tags = newTitle
      .split(" ")
      .filter((v) => v.startsWith("#"))
      .map((v) => v.replace("#", ""));
    // remove all tags from title
    tags.forEach((x) => {
      newTitle = newTitle.replace("#" + x, "");
    });

    const newCardArr = {
      id: lastCardId,
      title: newTitle.trim(),
      value: this.state.inputAddNewCard,
      tag: tags
    };
    //
    myData.lists[listIndex].cards.push(newCardArr);
    // clean input after add
    this.setState({ boardData: myData, inputAddNewCard: "" });
    // save data inside storage
    this.props.onBoardDataChange(myData);
  }

  handleChangeCard(event) {
    const myData = { ...this.state.boardData };
    let newTitle = event.target.value;
    if (!newTitle) {
      newTitle = "Board Title";
    }
    const listId = parseInt(event.target.dataset.parent);
    const listIndex = myData.lists.findIndex((el) => el.id === listId);
    // change title
    myData.lists[listIndex].title = newTitle;

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
          onSubmitNewCard={this.handleSubmitNewCard}
          inputAddNewCard={this.state.inputAddNewCard}
          onChangeInputAddNewCard={this.handleChangeInputAddNewCard}
          onChangeListTitle={this.handleChangeListTitle}
        />
      </div>
    );
  }
}

export default BoardTemplate;
