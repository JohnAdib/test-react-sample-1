import React from "react"
import FormAddAfterClick from "./../molecules/FormAddAfterClick";
import ClickToEdit from "../molecules/ClickToEdit";
import MoveCard from "../organisms/MoveCard";

function BoardLists(props) {
  return (
    <main className='grow py-6 px-6 w-full h-full flex flex-row flex-nowrap gap-2 snap-x overflow-x-auto'>
      {listsLayout(props)}
      {elAddNewList(props)}
      {MoveCard(props)}
    </main>
  );
}

function listsLayout(props) {
  return props.data.map((val) => (
    <section
      className='snap-end shrink-0 relative basis-72 w-72 pb-2'
      key={val.id}
    >
      <div className='bg-slate-100/90 rounded leading-5 text-sm'>
        {elListTitle(props, val.id, val.title)}
        {elCards(props, val.id, val.cards)}
        {elAddNewCard(props, val.id)}
      </div>
    </section>
  ));
}

function elListTitle(props, listID, listTitle) {
  return (
    <header className='p-2 font-semibold'>
      <div className='px-2'>
        <ClickToEdit
          value={listTitle}
          onChange={props.onChangeListTitle}
          onClickArchive={props.onArchiveList}
          father={listID}
        >
          {listTitle}
        </ClickToEdit>
      </div>
    </header>
  );
}

function elCards(props, listId, card) {
  if (!card) {
    return;
  }

  return (
    <div className='px-2 leading-6'>
      {card.map((myCards) => (
        <div
          draggable
          className='bg-white shadow-sm hover:shaodw-md mb-2 px-2 py-1.5 rounded transition hover:bg-white/50 cursor-pointer'
          key={myCards.id}
        >
          <div className='overflow-hidden text-ellipsis'>
            <ClickToEdit
              value={myCards.value}
              onChange={props.onChangeCard}
              father={myCards.id}
              grandfather={listId}
              onClickArchive={props.onArchiveCard}
            >
              {elCardDesignTags(myCards.tag)}
              {myCards.title}
            </ClickToEdit>
          </div>
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
    <div className='leading-5 flex flex-wrap gap-1'>
      {tags.map((myTag) => (
        <div
          className={
            "capitalize px-2 rounded transition text-white text-ellipsis overflow-hidden " +
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

function elAddNewCard(props, idList) {
  return (
    <footer className='px-2 pb-2'>
      <FormAddAfterClick
        title='Add a card'
        // placeholder='Enter the title for this card...'
        placeholder='Enter title for this card #tag1'
        btnText='Add card'
        value={props.inputAddNewCard}
        onChange={props.onChangeInputAddNewCard}
        onSubmit={props.onSubmitNewCard}
        theme='black'
        idList={idList}
      />
    </footer>
  );
}

function elAddNewList(props) {
  return (
    <div className='flex-none grow-0 snap-start shrink-0a relative basis-72'>
      <FormAddAfterClick
        title='Add another list'
        placeholder='Enter list title...'
        btnText='Add List'
        value={props.inputAddNewList}
        onChange={props.onChangeInputAddNewList}
        onSubmit={props.onSubmitNewList}
      />
    </div>
  );
}

export default BoardLists;
