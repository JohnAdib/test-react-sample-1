import BoardLayout from "../templates/BoardLayout";
import { data } from "../static/data.js";

function TrelloBoard() {
  const color = "red";

  // fill data here
  return <BoardLayout data={data} />;
}

export default TrelloBoard;
