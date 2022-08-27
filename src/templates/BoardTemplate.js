import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

function BoardTemplate(props) {
  const { data } = props;

  // console.log(data);
  const boardOptions = data;

  // const boardOptions = data.filter(function (el, index) {
  //   return el;
  //   return index !== "lists";
  // });

  // console.log(boardOptions);

  let pageStyle =
    "h-screen select-none flex flex-col bg-[" + boardOptions.background + "]";
  // bg-[#0079bf] bg-[#00aecc]

  return (
    <div className={pageStyle}>
      <BoardHeader data={boardOptions} />
      <BoardLists data={data.lists} />
    </div>
  );
}

export default BoardTemplate;
