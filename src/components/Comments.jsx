import { Comment, Tooltip, List } from "antd";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const data = [
   {
      //   actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: "Han Solo",
      avatar: "https://joeschmoe.io/api/v1/random",
      content: (
         <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
         </p>
      ),
      datetime: (
         <Tooltip
            title={dayjs().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}
         >
            <span>
               {dayjs(dayjs(new Date(2022, 1, 1), new Date())).fromNow()}
            </span>
         </Tooltip>
      ),
   },
   {
      //   actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: "Han Solo",
      avatar: "https://joeschmoe.io/api/v1/random",
      content: (
         <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
         </p>
      ),
      datetime: (
         <Tooltip
            title={dayjs().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}
         >
            <span>
               {dayjs(dayjs(new Date(2021, 1, 1), new Date())).fromNow()}
            </span>
         </Tooltip>
      ),
   },
];

const Comments = () => {
   return (
      <div>
         <List
            className="comment-list"
            header={`${data.length} replies`}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
               <li>
                  <Comment
                     actions={item.actions}
                     author={item.author}
                     avatar={item.avatar}
                     content={item.content}
                     datetime={item.datetime}
                  />
               </li>
            )}
         />
      </div>
   );
};

export default Comments;
