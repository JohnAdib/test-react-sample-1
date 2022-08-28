import FormAddList from "./../molecules/FormAddList";

function BoardLists(props) {
  return (
    <main className='grow p-2 px-4 w-full h-full flex gap-2 snap-x overflow-x-auto'>
      <div className='snap-end shrink-0 relative basis-72'>
        <img
          className='relative shrink-0 w-180 h-40 rounded-lg shadow-xl bg-white'
          src='https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
        />
      </div>
      <div className='snap-end shrink-0 relative basis-72'>
        <img
          className='relative shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
          src='https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
        />
      </div>

      <div className='snap-end shrink-0 relative basis-72'>
        <FormAddList onAddNewList={props.onAddNewList} />
      </div>
    </main>
  );
}

export default BoardLists;
