import FormAddList from "./../molecules/FormAddList";

function BoardLists(props) {
  return (
    <main className='grow p-2 px-6 w-full h-full flex gap-2 snap-x overflow-x-auto'>
      {listsLayout(props.data)}
      {elAddNewList(props)}
    </main>
  );
}

function listsLayout(lists) {
  return lists.map((val) => (
    <section className='snap-end shrink-0 relative basis-72' key={val.id}>
      <div className='bg-gray-100/90 rounded leading-5 text-sm'>
        {elCardTitlecard(val.title)}
        {elCardDesing(val.cards)}
        {elAddNewCard()}
      </div>
    </section>
  ));
}

function elCardTitlecard(title) {
  return (
    <header className='p-2.5 font-semibold'>
      <div className=''>{title}</div>
    </header>
  );
}

function elCardDesing(card) {
  return (
    <div class='p-2.5'>
      {card.map((myCards) => (
        <div>{myCards.title}</div>
      ))}
    </div>
  );
}

function elAddNewCard(card) {
  return <footer class='p-2.5'>"add a cards..."</footer>;
}

function elAddNewList(props) {
  return (
    <div className='snap-end shrink-0 relative basis-72'>
      <FormAddList
        onSubmitNewList={props.onSubmitNewList}
        inputAddNewList={props.inputAddNewList}
        onChangeInputAddNewList={props.onChangeInputAddNewList}
      />
    </div>
  );
}

export default BoardLists;
