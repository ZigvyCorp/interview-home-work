import { Link } from "react-router-dom";

export default function Header({title}) {
  return (
    <div className="header container position-fixed top-0 start-50 translate-middle-x">
      <div className="row p-0 border border-2 border-dark bg-light">
        <div className="col p-0">
          <Link
            to="/"
            className="d-flex align-items-center gap-2 text-decoration-none">
            <div className="logo"></div>
            <span className="fw-bold text-dark">Logo</span>
          </Link>
        </div>

        <div className="col-2">
          <div className="nav-blog position-relative d-flex justify-content-center h-100 border border-2 border-dark border-top-0 border-bottom-0">
            <span className="fw-bold align-self-center">{title}</span>
          </div>
        </div>

        <div className="col">
          <div className="d-flex h-100 flex-row justify-content-end align-items-center gap-2">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.0h8fo76BwSZTehnXfYhcNQHaHc&pid=Api&P=0&h=180"
              alt="avatar"
              className="avatar cursor-pointer"
            />
            <span className="fw-bold">Adam Levine</span>
          </div>
        </div>
      </div>
    </div>
  );
}
