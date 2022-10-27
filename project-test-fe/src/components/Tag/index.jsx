import React from "react";
import {Tag} from "antd";
import './styles.scss';

const TagItem = () => {
    const dataTag = [
         "magenta", "red", "volcano", "orange", 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];

    return (
        <div className="tag-item">
           {
             dataTag.map((item, index) => (
                <Tag key={index} color={item}> {item} </Tag>
            ))
           }
        </div>
    )
}

export default TagItem;