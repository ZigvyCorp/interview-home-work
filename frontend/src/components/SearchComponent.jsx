// E:\zigvy\truong_2024_2\zigvy-interview-blog\frontend\src\components\SearchComponent.jsx
import PropTypes from 'prop-types';
import {Input} from 'antd';

const {Search} = Input;

const SearchComponent = ({handleSearch}) => {
    return (
        <div style={{maxWidth: '80%', margin: '0 auto 20px'}}>
            <Search
                placeholder="Search posts by title or content"
                onSearch={handleSearch}
                enterButton
                size="large"
                allowClear
            />
        </div>
    );
};

// Define PropTypes for the component
SearchComponent.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default SearchComponent;
