import { Tag } from "antd";
import React from "react";

const TagSlug = () => {
    const dataTag = [
        "magenta",
        "red",
        "volcano",
        "orange",
        "gold",
        "lime",
        "green",
        "cyan",
        "blue",
        "geekblue",
        "purple",
    ];
    return (
        <div>
            {dataTag.map((tag, index) => (
                <Tag key={index} color={tag}>
                    {tag}
                </Tag>
            ))}
        </div>
    );
};

export default TagSlug;
