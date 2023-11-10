import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const Page500 = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };
  return (
    <div className='h-screen'>
      <Result
        status='500'
        title='500'
        subTitle='Sorry, something went wrong.'
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

export default Page500;
