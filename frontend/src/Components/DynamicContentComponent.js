// DynamicContentComponent.js

import React from 'react';

// Functional component that utilizes props
const DynamicContentComponent = (props) => {
  // Destructuring props to access individual values
  const { title, content, author, date } = props;

  // Handling default prop values
  const displayAuthor = author || 'Unknown';
  const displayDate = date || 'Unknown Date';

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author: {displayAuthor}</p>
      <p>Date: {displayDate}</p>
    </div>
  );
};

export default DynamicContentComponent;