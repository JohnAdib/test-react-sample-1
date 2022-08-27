import Img from "./../atoms/Img";

function Avatar(props) {
  return (
    <Img className='block rounded-circle' src={props.src} alt={props.alt} />
  );
}

export default Avatar;
