import React from 'react';

// card sets
const Sets = () => {
  const cardSets = [
    { id: 1, name: 'Set 1', description: 'Description of Set 1' },
    { id: 2, name: 'Set 2', description: 'Description of Set 2' },
    { id: 3, name: 'Set 3', description: 'Description of Set 3' },
    { id: 4, name: 'Set 4', description: 'Description of Set 4' },
    { id: 5, name: 'Set 5', description: 'Description of Set 5' },
  ];

  return (
    <div>
      <h1>Sets</h1>
      {cardSets.map((set) => (
        <div key={set.id}>
          <h2>{set.name}</h2>
          <p>{set.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Sets;
