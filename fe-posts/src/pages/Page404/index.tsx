import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <div className='flex justify-center'>
            <Button type='primary' onClick={handleBack}>
              Back Home
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default Page404;
