import FormAddList from "./../molecules/FormAddList";

function BoardLists(props) {
  return (
    <main className='grow py-6 px-6 w-full h-full flex gap-2 snap-x overflow-x-auto'>
      {listsLayout(props.data)}
      {elAddNewList(props)}
    </main>
  );
}

function listsLayout(lists) {
  return lists.map((val) => (
    <section className='snap-end shrink-0 relative basis-72' key={val.id}>
      <div className='bg-slate-100/90 rounded leading-5 text-sm'>
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
      <div className='px-2'>{title}</div>
    </header>
  );
}

function elCardDesing(card) {
  return (
    <div className='px-2.5 leading-6'>
      {card.map((myCards) => (
        <div
          className='bg-white shadow-sm hover:shaodw-md mb-2 px-2 py-1.5 rounded transition hover:bg-white/50 cursor-pointer'
          key={myCards.id}
        >
          {elCardDesignTags(myCards.tag)}
          <div>{myCards.title}</div>
        </div>
      ))}
    </div>
  );
}

function elCardDesignTags(tags) {
  // const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-green-500",
    "bg-zinc-500",
    "bg-orange-500",
    "bg-amber-500",
    "bg-yellow-500",
    "bg-lime-500",
    "bg-emerald-500",
    "bg-cyan-500",
    "bg-sky-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-pink-500",
    "bg-rose-500"
  ];
  return (
    <div className='leading-5 flex gap-1'>
      {tags.map((myTag) => (
        <div
          className={
            "px-2 rounded transition text-white " +
            colors[Math.floor(Math.random() * colors.length)]
          }
          key={myTag}
        >
          {myTag}
        </div>
      ))}
    </div>
  );
}

function elAddNewCard(card) {
  return <footer className='p-2.5'>Add a cards...</footer>;
}

function elAddNewList(props) {
  return (
    <div className='snap-start shrink-0 relative basis-72'>
      <FormAddList
        onSubmitNewList={props.onSubmitNewList}
        inputAddNewList={props.inputAddNewList}
        onChangeInputAddNewList={props.onChangeInputAddNewList}
      />
    </div>
  );
}

export default BoardLists;
