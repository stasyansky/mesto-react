import React from 'react';

function Card({ card, onCardClick }) {

    function handleClick() {
        onCardClick({link: card.link, name: card.name});
    }

    return (
        <li className="card">
            <button type="button" className="card__delete"></button>
            <img
                className="card__pic"
                src={card.link}
                alt={card.name}
                onClick={handleClick}
            />
            <div className="card__caption">
                <h2 className="card__text">{card.name}</h2>
                <div className="card__likes">
                    <button type="button" className="card__like" aria-label="Поставить лайк"></button>
                    <span className="card__count">{card.likes.length}</span>
                </div>
            </div>
        </li>
    );
};

export default Card;
