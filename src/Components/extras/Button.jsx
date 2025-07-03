export default function Button({url}) {
  return (
    <a
      className="btn btn-xl btn-outline-light"
      href={url}
    >
      <i className="fas fa-download me-2"></i>
      Free Download!
    </a>
  );
}
