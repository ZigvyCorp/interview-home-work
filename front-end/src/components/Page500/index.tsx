import { Button, Result } from 'antd';

const Page500 = () => {
  return (
    <div className="">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
          <div className="">
            <Button type="primary">Back Home</Button>
          </div>
        }
      />
    </div>
  );
};

export default Page500;
