import { forwardRef } from 'react'
import {
    Input as AntdInput,
    InputRef as AntdInputRef,
    ConfigProvider as AntdConfigProvider
} from 'antd'
import { SearchProps as AntdSearchProps } from 'antd/es/input'
import { Require } from 'types/common'

const { Search: AntdSearch } = AntdInput

interface SearchProps extends Require<AntdSearchProps, 'placeholder' | 'onSearch'> {
    fontSize?: number
}

const Search = forwardRef<AntdInputRef, SearchProps>(({
    placeholder,
    onSearch,
    fontSize = 14,
    ...props
}, ref) => {
    return (
        <AntdConfigProvider theme={{
            token: {
                colorPrimary: '#000',
                colorBorder: '#000',
                fontSize
            }
        }}>
            <AntdSearch
                placeholder={placeholder}
                onSearch={onSearch}
                {...props}
                ref={ref}
            />
        </AntdConfigProvider>
    )
})

Search.displayName = 'Search'
export default Search
