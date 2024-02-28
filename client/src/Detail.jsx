import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState({});
  const [comment, setComment] = useState([]);
  const [user, setUser] = useState({});
  const { id } = useParams();
  const count = useSelector((state) => state.counter);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())

      .then((data) => {
        const user = count.user?.find((user) => user.id === data.userId);
        setData(data);
        setUser(user);
      })
      .catch((error) => console.log(error));

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComment(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="font-medium grid grid-cols-3 gap-4 mx-4">
      <div className="col-span-2">
        <p className="text-2xl py-2 text-center text-blue-500">{data?.title}</p>
        <p>{data?.body}</p>
        <p className="flex font-bold justify-end">{user?.name}</p>
      </div>

      <div className="border-l border-black p-4">
        <p className="text-2xl text-blue-500 text-center">comment</p>
        {comment?.map((idx) => (
          <div key={idx.id} className="py-4">
            <p className="text-sm text-gray-400">{idx.name}</p>
            <p className="font-normal text-sm">{idx.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
