import BaseSearch from 'antd/es/input/Search';

interface SearchProps {
    onChange: (value: string) => void;
    submit: () => void;
}

const Search: React.FC<SearchProps> = (props) => {
    const { onChange, submit } = props;
    return (
        <div className='mb-4'>
            <BaseSearch
                size='large'
                onChange={e => onChange(e.target.value)}
                onSearch={submit}
                onPressEnter={submit}
                placeholder='Input post title'
            />
        </div>
    )
}

export default Search