import { Link } from "react-router-dom";

export interface ISearchBox {
  className?: string;
  list: Array<any>;
}

const SearchBox = ({ className = "", list }: ISearchBox) => {
  return (
    <div className={className}>
      {list.length > 0 ? (
        list.map((item, index) => (
          <div key={index} className="text-light_grey">
            <Link to={`/${item.id}`} className="flex items-center space-x-[12px] group">
              <div className="w-[20px] h-[20px] bg-yellow rounded-full"></div>
              <span className="text-light_grey group-hover:underline group-hover:font-semibold line-clamp-1">
                {item.title}
              </span>
            </Link>
          </div>
        ))
      ) : (
        <div className="text-light_grey">No data</div>
      )}
    </div>
  );
};

export default SearchBox;
