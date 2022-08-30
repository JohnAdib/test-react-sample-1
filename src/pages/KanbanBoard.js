import React from "react";
import BoardTemplate from "../templates/BoardTemplate";
import { data } from "../pages/data.js";
import Storage from "../tools/Storage";

class KanbanBoard extends React.Component {
  getData() {
    const storage = new Storage();
    let myData = storage.get("boardData");

    if (myData) {
      return myData;
    }

    return this.nullData();
  }

  nullData() {
    this.setData(data);
    return data;
  }

  setData(data) {
    if (!data) {
      return;
    }
    console.log(data);
    const storage = new Storage();
    storage.set("boardData", data);
  }

  render() {
    // fill data here
    return (
      <BoardTemplate
        data={this.getData()}
        onBoardDataChange={(i) => this.setData(i)}
      />
    );
  }
}

export default KanbanBoard;
