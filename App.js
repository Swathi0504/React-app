import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
    "div",
    {class:"title"},
    [React.createElement(
        "h1",
        {},
        "This is Heading one"
    ),
    React.createElement(
        "h2",
        {},
        "This is Heading one"
    ),
    React.createElement(
        "h3",
        {},
        "This is Heading one"
    )]
)

root.render(heading);