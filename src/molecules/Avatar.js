import Img from "./../atoms/Img";

function Avatar(props) {
  return (
    <button href='#' className='block rounded-full'>
      <Img
        className='block h-10 w-10 rounded-full transition hover:opacity-90 active:opacity-80'
        src={props.src}
        alt={props.alt}
      />
    </button>
  );
}

export default Avatar;
