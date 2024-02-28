import React from 'react';
import { AutoComplete, Input } from 'antd';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { CloseCircleFilled } from '@ant-design/icons';


const InputSearchStyled = styled(AutoComplete)`
    width: 100%;
`

const InputSearch = ({ option, onSearch }) => {

    return (
        <InputSearchStyled
            options={option || []}
            filterOption={(inputValue, option) =>
                option?.value?.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
            onClear={true}
        >
            <Input.Search
                size="large"
                placeholder="Search"
                onSearch={onSearch}
            />
        </InputSearchStyled>
    )
};

InputSearch.propTypes = {
    option: PropTypes.array,
    onSearch: PropTypes.func
};

export default InputSearch;
