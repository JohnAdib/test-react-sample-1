import Logo from "./../atoms/Logo";
import H1 from "./../atoms/H1";

function Brand(props) {
  return (
    <a
      target='_blank'
      href={props.link}
      className='flex flex-row flex-nowrap flex-none items-center gap-1 lg:gap-2 px-2 leading-10 transition hover:bg-gray-200 active:bg-gray-300 rounded'
    >
      <Logo className={props.color} size='32' />
      <H1 className={props.color}>{props.children}</H1>
    </a>
  );
}

export default Brand;
