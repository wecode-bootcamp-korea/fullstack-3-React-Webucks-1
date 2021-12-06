import { useState } from 'react';

function CoffeeCard(props) {
  let [like, setlike] = useState('🤍');
  return (
    <div className="add">
      <img src={props.item.img} alt={props.item.name} />
      <div className="name">
        <h4>{props.item.name}</h4>
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
