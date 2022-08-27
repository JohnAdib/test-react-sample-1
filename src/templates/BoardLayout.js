import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

function BoardLayout(props) {
  const { data } = props;

  // console.log(data);
  const boardOptions = data;

  // const boardOptions = data.filter(function (el, index) {
  //   return el;
  //   return index !== "lists";
  // });

  // console.log(boardOptions);

  return (
    <div>
      <BoardHeader data={boardOptions} />
      <BoardLists data={data.lists} />
    </div>
  );
}

export default BoardLayout;
