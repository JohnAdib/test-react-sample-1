import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

function BoardLayout(props) {
  return (
    <div>
      <BoardHeader color={props.color} />
      <BoardLists color={props.color} />
    </div>
  );
}

export default BoardLayout;
