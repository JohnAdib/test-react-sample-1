import React from "react";
import BoardTemplate from "../templates/BoardTemplate";
import { data } from "../pages/data.js";
import Session from "../tools/SessionStorage";

class TrelloBoard extends React.Component {
  render() {
    const session = new Session();

    let myData = session.get("boardData");

    if (!myData) {
      session.set("name", { data });
      myData = data;
    }

    console.log(myData);

    // fill data here
    return <BoardTemplate data={myData} />;
  }
}

export default TrelloBoard;
