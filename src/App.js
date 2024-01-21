import React, { useState } from 'react';
import CustomTagCloud from './TagCloud';
import DescriptionModal from './DescriptionModal';
import './App.css'; // You can also add some global styles here

const App = () => {
  const [tags] = useState([
    { text: 'Tag1', description: 'This is a text description.' },
    { text: 'Tag2', description: 'This is another text description.' },
    { text: 'Tag3', description: 'https://example.com/image.jpg' }, // This should be a link to an image
    // ... add more tags with descriptions
  ]);

  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handleCloseModal = () => {
    setSelectedTag(null);
  };

  return (
    <div className="App">
      <CustomTagCloud tags={tags} onClickTag={handleTagClick} />
      {selectedTag && (
        <DescriptionModal
          isOpen={!!selectedTag}
          content={selectedTag.description}
          onRequestClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
