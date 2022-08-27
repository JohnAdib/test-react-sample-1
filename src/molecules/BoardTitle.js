import H1 from "./../atoms/H1";

function BoardTitle(props) {
  var h1Class = "font-bold truncate " + props.color;

  return (
    <a
      href={props.link}
      className='flex flex-row flwx-nowrap flex-none items-center gap-1 lg:gap-2 px-2 leading-10 transition hover:bg-gray-200 active:bg-gray-300'
    >
      <H1 className={h1Class}>{props.children}</H1>
    </a>
  );
}

export default BoardTitle;
