import Avatar from "../molecules/Avatar";
import BoardTitle from "../molecules/BoardTitle";
import Brand from "../molecules/Brand";

function BoardHeader(props) {
  const { data } = props;

  return (
    <header className='flex flex-row flex-nowrap flex-none gap-2 lg:gap-4 p-1 backdrop-blur-md bg-black/20 text-white'>
      <div className='flex-none'>
        <Brand link={data.brandLink}>{data.brand}</Brand>
      </div>

      <div className='truncate'>
        <BoardTitle>{data.title}</BoardTitle>
      </div>

      <div className='grow'></div>

      <div className='flex-none'>
        <Avatar src={data.userAvatar} alt={data.userName}></Avatar>
      </div>
    </header>
  );
}

export default BoardHeader;
