import React from "react";
import BoardTemplate from "../templates/BoardTemplate";
import { data } from "../pages/data.js";

class TrelloBoard extends React.Component {
  render() {
    // window.sessionStorage.setItem("boardData", "value");

    let myData = window.sessionStorage.getItem("boardData");

    if (!myData) {
      window.sessionStorage.setItem("boardData", { data });
      myData = data;
    }

    console.log(myData);

    // fill data here
    return <BoardTemplate data={myData} />;
  }
}

export default TrelloBoard;
