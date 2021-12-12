import { useState } from 'react';

function CoffeeCard({ item }) {
  let [like, setlike] = useState('🤍');
  return (
    <div className="add">
      <img src={item.img} alt={item.name} />
      <div className="name">
        <h4>{item.name}</h4>
        <span
          className="like"
          onClick={() => {
            like === '🤍' ? setlike('❤️') : setlike('🤍');
          }}
        >
          {like}
        </span>
      </div>
    </div>
  );
}

export default CoffeeCard;
