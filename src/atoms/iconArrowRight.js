function IconX(props) {
  // https://icons.getbootstrap.com/icons/arrow-right/
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.size}
      height={props.size}
      fill='currentColor'
      className={`bi bi-arrow-right ${props.className}`}
      viewBox='0 0 16 16'
    >
      <path
        fill-rule='evenodd'
        d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
      />
    </svg>
  );
}

export default IconX;
