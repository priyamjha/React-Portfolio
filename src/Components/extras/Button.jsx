export default function Button(props) {
  return (
    <a
      className="btn btn-xl btn-outline-light"
      href={props.url}
    >
      <i className="fas fa-download me-2"></i>
      Free Download!
    </a>
  );
}
