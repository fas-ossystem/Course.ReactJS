import React from "react";

export default function Card(props) {
  const { isOpen, title, text, count, onTitleClick, onButtonClick } = props;

  return (
    <li className="card mx-auto list-item-conteiner">
      <div className="card-header">
        <h2 onClick={onTitleClick} className="title">
          {title}
          <div className="clicks-counter">clicked {count}</div>
        </h2>
        <button
          onClick={onButtonClick}
          className="btn btn-primary btn-lg float-right"
        >
          {isOpen ? "close" : "open"}
        </button>
      </div>
      {isOpen && (
        <div className="card-body">
          <section className="card-text">{text}</section>
        </div>
      )}
    </li>
  );
}
