import { Link } from "react-router-dom";
import { hideLongDesc } from "../../utils/HideLongDecs";

function Card({ item }) {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src="https://picsum.photos/200/200?random=1"
        alt="blog"
        loading="lazy"
      />
      <div className="card-body">
        <h4 title={item.title} className="card-title text-truncate">
          {item.title}
        </h4>
        <p
          style={{
            height: "120px",
          }}
          className="card-text text-muted"
        >
          {hideLongDesc(item.body, 100)}
        </p>
        <Link to={`/detail/${item.id}`}>
          <button className="btn btn-dark w-100">Read more</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
