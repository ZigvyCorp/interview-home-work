import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { List } from "antd";
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';

const { Search } = Input;

export default function SearchTitle(props) {
    const [filterTitle, setFilterTitle] = useState("");
    const { arrPost } = useSelector(state => state.BlogReducer);
    const filterItem = arrPost.filter(item => item.title.toLocaleLowerCase().includes(filterTitle));
    const onChange = (e) => {
        setFilterTitle(e.target.value.toLocaleLowerCase());
    };

    return (
        <div>
            <Search placeholder="search Post Title" allowClear
                value={filterTitle} onChange={onChange} />

            {
                filterTitle ? <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={filterItem}

                    renderItem={item => (
                        <List.Item
                            key={`${item.title}`}
                        >
                            {
                                <div className="blog">
                                    <NavLink to={`/post/${item.id}`}>
                                        <h2 className="blog__title">{item.title}</h2>
                                    </NavLink>
                                </div>
                            }
                        </List.Item>
                    )}
                /> : ''
            }


        </div>
    )
}
