import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex justify-content-center">
      <p className="fw-bold text-uppercase">Page Not found</p>
      <NavLink to={"/"}>Back to home</NavLink>
    </div>
  );
}
