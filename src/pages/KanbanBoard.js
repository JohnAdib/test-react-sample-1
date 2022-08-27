import BoardTemplate from "../templates/BoardTemplate";
import { data } from "../pages/data.js";

function TrelloBoard() {
  // fill data here
  return <BoardTemplate data={data} />;
}

export default TrelloBoard;
