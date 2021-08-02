import React from 'react';
import './item.css';
export default function Item(props) {
  return (
    <div>
      <li className=" style-li justify-content-between border align-items-center d-flex p-2 m-2">
        <div className="p-3">{props.txt}</div>
        <button
          className="btn btn-danger p-2 h-50 btn-delete"
          onClick={() => props.del(props.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
}
