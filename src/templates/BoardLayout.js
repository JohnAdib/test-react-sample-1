import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

function BoardLayout(props) {
  return (
    <div>
      <BoardHeader />
      <BoardLists />
    </div>
  );
}

export default BoardLayout;
