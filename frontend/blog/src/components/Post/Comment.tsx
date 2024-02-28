import { Avatar, Card, Divider } from "antd";
import './style.scss'
export const Comment = ({ id, owner, post, content, created_at }: IComment) => {
  return (
    <div key={id}>
      <div className="flex flex-row">
        <div className="flex flex-row w-1/12 items-center">
          <Avatar
            src={
              "https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg"
            }
            alt="User Profile"
          />
        </div>
        <Card className="flex flex-col w-full items-start">
          <div className="w-full flex flex-col">
            <div className="flex flex-row justify-between w-full">
              <div className="flex w-1/2">
                <h3>{owner}</h3>
              </div>
              <div className="flex w-1/2 justify-end">
                <p>{`${created_at}`}</p>
              </div>
            </div>
            <div>
              <p>{content}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
