import React from 'react'
import { Pagination } from 'react-bootstrap'
import 'styles/Paginations-styles.scss'

export default function Paginations() {
    let active = 1
    let item = [1, 2, 3, 4, 5]
    return (
        <div className="pagination-wrapper">
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                {item.map((item, idx) => (
                    <Pagination.Item
                        activeLabel=""
                        key={idx}
                        active={item === active}
                    >
                        {item.toString()}
                    </Pagination.Item>
                ))}
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    )
}
