import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name='edit'
            title='Редактировать профиль'
            buttonText='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                id="name"
                name="popupName"
                minLength="2"
                maxLength="40"
                className="popup__input popup__input_type_name"
                value={name ? name : '' }
                placeholder="Введите свое имя"
                onChange={handleNameChange}
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
                value={description ? description : ''}
                placeholder="Ваша профессия"
                onChange={handleDescriptionChange}
                required
            />
            <span className="popup__text-error" id="prof-error"></span>
        </PopupWithForm>
    );
};

export default EditProfilePopup;
