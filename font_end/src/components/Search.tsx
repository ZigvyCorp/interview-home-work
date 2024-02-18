import { AutoComplete } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { type Post, selectAllPost } from '../features/posts/postsSlice';

const Search = () => {
    const navigate = useNavigate();
    const posts = useAppSelector(selectAllPost);
    const options = posts.map((post) => ({
        ...post,
        value: post.title[0].toUpperCase() + post.title.slice(1),
    }));

    const onSelect = (option: Post) => {
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
            filterOption={(inputValue, option) => {
                return (
                    option?.value
                        .toUpperCase()
                        .indexOf(inputValue.toUpperCase()) !== -1
                );
            }}
        />
    );
};
export default Search;
