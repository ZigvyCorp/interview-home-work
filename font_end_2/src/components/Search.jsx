import { AutoComplete } from 'antd';
import { useNavigate } from 'react-router-dom';

import useFetcher from '../hooks/useFetcher';

const Search = () => {
    const navigate = useNavigate();
    const { data } = useFetcher(`https://jsonplaceholder.typicode.com/posts`);
    const options = data?.map((obj) => ({ ...obj, value: obj.title }));

    const onSelect = (option) => {
        navigate(`/blog/${option.id}`);
    };
    return (
        <AutoComplete
        
            size="large"
            style={{
                width: 300,
            }}
            notFoundContent={
                <div className="flex justify-center text-sm">Not found!</div>
            }
            options={options}
            onSelect={onSelect}
            placeholder="Searching. . ."
            filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
            }
        />
    );
};
export default Search;
