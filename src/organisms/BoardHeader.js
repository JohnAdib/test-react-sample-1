import BoardTitle from "../molecules/BoardTitle";
import Brand from "../molecules/Brand";

function BoardHeader(props) {
  // possible values
  // text-red-700 text-green-700 text-blue-700
  let brandColor = "text-" + props.color + "-700";

  return (
    <header className='flex flex-row flex-nowrap flex-none gap-2 bg-gray-100 px-2 py-1'>
      <div class='grow truncate'>
        <BoardTitle>test</BoardTitle>
      </div>
      <div class='flex-none'>
        <Brand color={brandColor} link='https://MrAdib.com'>
          MrAdib Sample Kanban Board
        </Brand>
      </div>
    </header>
  );
}

export default BoardHeader;
