import H1 from "./../atoms/H1";

function BoardTitle(props) {
  var h1Class = "font-bold truncate " + props.color;

  return (
    <div className='flex flex-row flwx-nowrap flex-none items-center gap-1 lg:gap-2 px-2 leading-10 rounded transition hover:bg-white/20 focus:bg-white/40'>
      <H1 className={h1Class}>{props.children}</H1>
    </div>
  );
}

export default BoardTitle;
