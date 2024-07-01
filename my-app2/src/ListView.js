import React from 'react';

const ListView = () => {
    const items = ['Item 1', 'Item 2', 'Item 3']; // Your array of items

    return (
        <div>
            <h1>List View</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListView;
