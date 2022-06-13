import React, {useState, useEffect} from 'react';
import Card from "./Card";
import api from "../utils/api";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([user, cards]) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setCards(cards);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <img
                    className="profile__avatar"
                    src={userAvatar}
                    alt="Фотография аватара"
                    onClick={onEditAvatar}
                />
                <div className="profile__container">
                    <h1 className="profile__name">{userName}</h1>
                    <button
                        type="button"
                        onClick={onEditProfile}
                        className="profile__edit-btn"
                        aria-label="Редактировать профиль">
                    </button>
                    <p className="profile__prof">{userDescription}</p>
                </div>
                <button
                    type="button"
                    onClick={onAddPlace}
                    className="profile__add-btn"
                    aria-label="Добавить фото">
                </button>
            </section>
            <section className="places">
                <ul className="places__cards">
                    {cards.map(card => (
                        <Card
                            card={card}
                            key={card._id}
                            onCardClick={onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default Main;
