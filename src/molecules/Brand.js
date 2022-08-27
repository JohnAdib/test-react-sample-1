import Logo from "./../atoms/Logo";
import H1 from "./../atoms/H1";

function Brand(props) {
  let BrandColor = props.brandColor;
  if (BrandColor === undefined) {
    BrandColor = "text-" + props.color + "-700";
    // possible values
    // text-red-700 text-green-700 text-blue-700
  }

  let LogoClass = BrandColor + " text-xl";
  let H1Class = BrandColor + "";

  return (
    <a
      href={props.link}
      className='flex flex-row flwx-nowrap flex-none items-center gap-1 lg:gap-2 px-2 leading-10 transition hover:bg-gray-200 active:bg-gray-300'
    >
      <Logo className={LogoClass} size='32' />
      <H1 className={H1Class}>{props.title}</H1>
    </a>
  );
}

export default Brand;
