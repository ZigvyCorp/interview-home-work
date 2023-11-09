import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Input } from 'antd';
import { useClassName, useDebounce } from '../../hooks';
import { useDispatch } from 'react-redux';
import styles from './SearchComponent.module.css';
import { SEARCH_POST } from '../../redux/actions/searchAction';

const SearchComponent = ({ className: cusClassName }) => {
    // Custom hook for handling CSS class names
    const cx = useClassName(styles);

    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const searchRef = useRef();

    // Custom hook for debouncing the search input value
    const debounceValue = useDebounce(searchValue);

    // Focus on the search input when the component mounts
    useEffect(() => {
        searchRef.current.focus();
    }, []);

    // Dispatch a search action when the debounced search value changes
    useEffect(() => {
        dispatch(SEARCH_POST(debounceValue));
    }, [debounceValue, dispatch]);

    // Handler for updating the search value on input change
    const handleChange = (e) => {
        const searchValue = e.target.value;

        // Search value doesn't start with a space
        if (!searchValue.startsWith(' ')) setSearchValue(searchValue);
    };

    // Handler for clear Search value
    const handleClearSearch = () => {
        setSearchValue('');
    };

    return (
        <div className={cx('search-block', cusClassName)}>
            <Input
                placeholder="search..."
                autoFocus
                ref={searchRef}
                className={cx('input')}
                value={searchValue}
                onChange={handleChange}
            />
            <div
                className={cx('clear')}
                onClick={(e) => {
                    handleClearSearch(e);
                }}
            >
                x
            </div>
        </div>
    );
};

SearchComponent.propTypes = {
    className: PropTypes.string,
};

export default SearchComponent;
