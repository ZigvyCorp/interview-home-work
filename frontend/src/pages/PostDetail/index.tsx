import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostItem from "src/components/PostItem";
import Header from "src/components/Header";
import Spinner from "react-bootstrap/Spinner";
import { IPostWithRelations } from "src/interfaces/post";
import { getPostDetailStart, postSelector } from "src/store/reducers/post";
import { getPostProps } from "../utils";

const PostDetail = () => {
  const postDetail: IPostWithRelations = {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    comments: [
      {
        postId: 2,
        id: 6,
        name: "et fugit eligendi deleniti quidem qui sint nihil autem",
        email: "Presley.Mueller@myrl.com",
        body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
      },
      {
        postId: 2,
        id: 7,
        name: "repellat consequatur praesentium vel minus molestias voluptatum",
        email: "Dallas@ole.me",
        body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
      },
      {
        postId: 2,
        id: 8,
        name: "et omnis dolorem",
        email: "Mallory_Kunze@marie.org",
        body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
      },
      {
        postId: 2,
        id: 9,
        name: "provident id voluptas",
        email: "Meghan_Littel@rene.us",
        body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus",
      },
      {
        postId: 2,
        id: 10,
        name: "eaque et deleniti atque tenetur ut quo ut",
        email: "Carmen_Keeling@caroline.name",
        body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
      },
    ],
    user: {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
  };

  const { post, isLoading } = useSelector(postSelector);
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(getPostDetailStart(Number(id)));
    }
  }, [id]);

  return (
    <>
      <Header />
      {isLoading || !post ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <PostItem {...getPostProps(post, true)} />
      )}
    </>
  );
};

export default PostDetail;
