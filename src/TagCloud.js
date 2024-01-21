import React from 'react';
import TagCloud from 'react-tag-cloud';
import './TagCloud.css'; // We will create this file for styling

const cloudStyle = {
  fontFamily: 'sans-serif',
  fontSize: 30,
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: () => randomColor(),
  padding: 5,
};

const randomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 100%, 50%)`;
};

const CustomTagCloud = ({ tags, onClickTag }) => (
  <div className="tag-cloud-container">
    <TagCloud style={cloudStyle} className="tag-cloud">
      {tags.map((tag, index) => (
        <div key={index} onClick={() => onClickTag(tag)} style={{ cursor: 'pointer' }}>
          {tag.text}
        </div>
      ))}
    </TagCloud>
  </div>
);

export default CustomTagCloud;
