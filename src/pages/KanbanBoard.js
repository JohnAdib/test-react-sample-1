import BoardLayout from "../templates/BoardLayout";
import { data } from "../pages/data.js";

function TrelloBoard() {
  const color = "red";

  // fill data here
  return <BoardLayout data={data} />;
}

export default TrelloBoard;
