import React from 'react';

const NewSingle = ({ item }) => (
  <div className="col s4">
    <div className="card">
      <div className="card-image">
        <span class="badge grey lighten-2">{`$  ${item.price}`}</span>
        <img src={item.image} alt={item.name} />
        {/* <span className="card-title">{item.name}</span> */}
      </div>
      <div className="card-content">
        <p className="grey-text">{item.description}</p>
      </div>
      <div className="card-action">
        <a href={item.image} target="_blank">Product Detail</a>
      </div>
    </div>
  </div>
);

export default NewSingle;
