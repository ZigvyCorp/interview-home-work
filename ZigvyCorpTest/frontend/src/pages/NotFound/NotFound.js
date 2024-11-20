import { Link } from "react-router-dom";
import { imageNotFound } from "../../utils/data";

const NotFound = () => {
  return (
    <>
      <div className="my-5">
        <div className="row justify-content-center align-items-center">
          <h4 className="mb-sm-5 mb-2 text-center">Page Not Found</h4>
          <img
            style={{ width: "100%", height: "300px", objectFit: "contain" }}
            src={imageNotFound}
            alt="Not-found"
          />
          <button className="col-md-3 col-sm-6 col-12 btn-success btn mt-5">
            <Link to="/" className="text-decoration-none text-white">
              Home page
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
