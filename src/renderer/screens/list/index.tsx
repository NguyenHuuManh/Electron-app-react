import React from 'react';

function List() {
  return (
    <div>
      <div>list</div>
      {[1, 2, 3, 4, 5].map((el) => (
        <div key={el}>{el}</div>
      ))}
    </div>
  );
}

export default List;
