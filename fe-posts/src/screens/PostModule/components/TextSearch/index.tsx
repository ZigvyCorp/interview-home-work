import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../../../../core/debounce';
import { ActionApp } from '../../../../stores/redux/app.action';
import { SelectorApp } from '../../../../stores/redux/app.selector';

type Props = {};

const TextSearch = (props: Props) => {
  const [form] = useForm();

  const { limit, page } = useSelector(SelectorApp.paging);
  const dispatch = useDispatch();

  const handleOnFinish = (data: any) => {
    const { title } = data;

    dispatch(ActionApp.RequestGetPosts({ limit, page: 1, title }));
  };

  const handleOnChange = useDebounce(() => {
    form.submit();
  });

  return (
    <Form form={form} onFinish={handleOnFinish}>
      <Form.Item name={'title'}>
        <Input placeholder='Search by title...' onChange={handleOnChange} />
      </Form.Item>
    </Form>
  );
};

export default TextSearch;
