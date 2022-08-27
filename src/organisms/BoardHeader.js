import Brand from "../molecules/Brand";

function BoardHeader(props) {
  return (
    <header className='bg-gray-100 flex px-2 py-1'>
      <div class='grow'></div>
      <div class=''>
        <Brand title='Kanban' color={props.color} link='/' />
      </div>
    </header>
  );
}

export default BoardHeader;
