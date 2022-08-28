import Avatar from "../molecules/Avatar";
import BoardTitle from "../molecules/BoardTitle";
import Brand from "../molecules/Brand";

function BoardHeader(props) {
  const { data } = props;

  let headerClass =
    "flex flex-row flex-nowrap justify-center flex-none gap-2 lg:gap-4 py-1.5 px-1 leading-8 backdrop-blur-md bg-black/20 text-white";

  return (
    <header className={headerClass}>
      <Brand link={data.brandLink}>{data.brand}</Brand>
      <BoardTitle onChangeBoardTitle={props.onChangeBoardTitle}>
        {data.title}
      </BoardTitle>
      <div className='grow'></div>
      <Avatar src={data.userAvatar} alt={data.userName}></Avatar>
    </header>
  );
}

export default BoardHeader;
