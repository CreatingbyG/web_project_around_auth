

import React from "react";
import trash from "../images/Trash.svg";

function Card({ cards, onCardClick, onDeleteCard }) {
  return cards.map((card) => (
    <div className="card" onClick={() => onCardClick(card)}>
      <div className="card__image">
        <img
          className="card-photo"
          src={card.link}
          alt={card.name}
          style={{ backgroundImage: `url(${card.link})` }}
        />
      </div>
      <div className="icons">
        <img
          className="icons__delete"
          src={trash}
          onClick={(event) => {
            event.stopPropagation();
            onDeleteCard();
          }}
          alt="icono para eliminar imagen o modificar"
        />
        <div className="icons__dislike"></div>
      </div>
      <p className="card__image-text">{card.name}</p>
      <div className="icons__like_number">
        {card.likes.length > 0 ? card.likes.length : [""]}
      </div>
    </div>
  ));
}

export default Card;
