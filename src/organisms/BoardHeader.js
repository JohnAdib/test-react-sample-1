import Avatar from "../molecules/Avatar";
import BoardTitle from "../molecules/BoardTitle";
import Brand from "../molecules/Brand";

function BoardHeader(props) {
  const { data } = props;

  // possible values
  // text-red-700 text-green-700 text-blue-700
  let brandColor = "text-" + data.color + "-700";

  return (
    <header className='flex flex-row flex-nowrap flex-none gap-2 lg:gap-4 bg-gray-100 p-1'>
      <div className='flex-none'>
        <Brand color={brandColor} link={data.brandLink}>
          {data.brand}
        </Brand>
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
