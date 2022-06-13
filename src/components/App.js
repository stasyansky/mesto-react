import React, {useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import '../index.css';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard({link: card.link, name: card.name});
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({});
    }

    return (
      <div className="page">
          <Header />
          <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
          />
          <Footer />

          <PopupWithForm
              name='avatar'
              title='Обновить аватар'
              buttonText='Сохранить'
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
          >
              <input
                  type="url"
                  id="avatar"
                  name="popupAvatar"
                  className="popup__input popup__input_type_avatar"
                  defaultValue=""
                  placeholder="Введите url картинки"
                  required
              />
              <span className="popup__text-error" id="avatar-error"></span>
          </PopupWithForm>

          <PopupWithForm
              name='edit'
              title='Редактировать профиль'
              buttonText='Сохранить'
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
          >
              <input
                  type="text"
                  id="name"
                  name="popupName"
                  minLength="2"
                  maxLength="40"
                  className="popup__input popup__input_type_name"
                  defaultValue=""
                  placeholder="Введите свое имя"
                  required
              />
              <span className="popup__text-error" id="name-error"></span>
              <input
                  type="text"
                  id="prof"
                  name="popupProf"
                  minLength="2"
                  maxLength="200"
                  className="popup__input popup__input_type_prof"
                  defaultValue=""
                  placeholder="Ваша профессия"
                  required
              />
              <span className="popup__text-error" id="prof-error"></span>
          </PopupWithForm>

          <PopupWithForm
              name='add'
              title='Новое место'
              buttonText='Создать'
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
          >
              <input
                  type="text"
                  id="title"
                  name="popupTitle"
                  minLength="2"
                  maxLength="30"
                  className="popup__input popup__input_type_title"
                  defaultValue=""
                  placeholder="Название"
                  required
              />
              <span className="popup__text-error" id="title-error"></span>
              <input
                  type="url"
                  id="url"
                  name="popupUrl"
                  className="popup__input popup__input_type_url"
                  defaultValue=""
                  placeholder="Ссылка на картинку"
                  required
              />
              <span className="popup__text-error" id="url-error"></span>
          </PopupWithForm>

          <PopupWithForm
              name='delete'
              title='Вы уверены?'
              buttonText='Да'
              onClose={closeAllPopups}
          >
          </PopupWithForm>

          <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups}
          />
      </div>
  );
}

export default App;
