// In your React component
import React from "react";
import "./Tags.css"; // Import your CSS file

const Tags = ({ tags }) => {
    return (
        <div className='tag-container'>
            {tags.map((tag, index) => (
                <div key={index} className={`tag ${getTagColor(index)}`}>
                    {tag}
                </div>
            ))}
        </div>
    );
};

const getTagColor = (index) => {
    // Assign colors based on the tag order
    switch (index) {
        case 0:
            return "magenta";
        case 1:
            return "red";
        case 2:
            return "volcano";
        case 3:
            return "orange";
        case 4:
            return "gold";
        case 5:
            return "lime";
        case 6:
            return "green";
        case 7:
            return "cyan";
        case 8:
            return "blue";
        case 9:
            return "geekblue";
        case 10:
            return "purple";
        default:
            return "default"; // You can define a default class as needed
    }
};

export default Tags;
