import React from 'react';

export default function App() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((data) => data.json())
        .then((data) => console.log(data));

    return <div>hello</div>;
}
