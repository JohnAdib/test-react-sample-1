import React from "react";
import BoardTemplate from "../templates/BoardTemplate";
import { data } from "../pages/data.js";

class TrelloBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "aaaa" };

    this.handleBoardTitleChange = this.handleBoardTitleChange.bind(this);
  }

  handleBoardTitleChange(event) {
    this.setState({ value: event.target.value });
    console.log("change title");
  }

  render() {
    data.events = {
      onChangeBoardTitle: this.handleBoardTitleChange
    };
    // fill data here
    return <BoardTemplate data={data} />;
  }
}

export default TrelloBoard;
