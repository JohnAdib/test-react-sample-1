import Brand from "../molecules/Brand";

function BoardHeader(props) {
  // possible values
  // text-red-700 text-green-700 text-blue-700
  let brandColor = "text-" + props.color + "-700";

  return (
    <header className='bg-gray-100 flex px-2 py-1'>
      <div class='grow'></div>
      <div class=''>
        <Brand title='Kanban' color={brandColor} link='/' />
      </div>
    </header>
  );
}

export default BoardHeader;
