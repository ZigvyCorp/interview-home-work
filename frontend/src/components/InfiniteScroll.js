import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAction } from '../store/actions'
import { Input } from 'antd';
const InfiniteScrollComponent = () => {

    const dispatch = useDispatch()
    const totalData = useSelector((state) => state.data)
    const [itemState, setItemState] = useState({
        items: [],
        hasMore: true
    })

    const { Search } = Input;
    useEffect(() => {
        dispatch(fetchDataAction());
    }, [dispatch]);

    useEffect(() => {
        setItemState({ items: totalData.length > 10 ? totalData.slice(0, 10) : totalData })
    }, [totalData]);

    useEffect(() => {
        fetchMoreData()
    }, [itemState.hasMore])

    const fetchMoreData = () => {
        if (itemState.items.length === totalData.length) {
            setItemState({
                items: [...itemState.items],
                hasMore: false
            });
            return;
        }

        setTimeout(() => {
            setItemState({
                items: itemState.items.concat((totalData.length - itemState.items.length) > 2
                    ? totalData.slice(itemState.items.length + 1, itemState.items.length + 2)
                    : totalData.slice(itemState.items.length + 1, itemState.items.length)),
                hasMore: true
            });
        }, 500);
    };

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value)
        if (value !== "") {
            const newSearchData = itemState.items.filter((item) => 
                 item.title.toLowerCase().includes(value.toLowerCase()))
            setItemState({items: newSearchData, hasMore: true})
        } else {
            setItemState({items: totalData.slice(0,2), hasMore: true})
        }
    };
    return (
        <div>
            <Search placeholder="input search text" allowClear onSearch={onSearch} />

            <InfiniteScroll
                dataLength={100}
                next={fetchMoreData}
                hasMore={itemState.hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {itemState.items.map((post) => (
                    <Card post={post} />
                ))}
            </InfiniteScroll>
        </div>
    );
};
export default InfiniteScrollComponent
