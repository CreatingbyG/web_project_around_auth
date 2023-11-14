import React, { useState, useEffect } from "react";

import vector from "../images/Vector (3).svg";
import addButton from "../pages/styles/blocks/button/add-button/add-button.css";
import editButton from "../pages/styles/blocks/button/edit-button/edit-button.css";
import PopupWithForm from "./PopupWithForm.js";
import api from "../utils/api.js";
import Card from "./Card.js";
import ImagePopup from "./ImagePopup.js";

function AppMain() {
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isPlacePopupOpen, setIsPlacePopupOpen] = useState(false);
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsPlacePopupOpen(true);
  };

  const handleDeletingCardClick = () => {
    setIsConfirmPopupOpen(true);
  }

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  const closeAllPopups = () => {
    setIsProfilePopupOpen(false);
    setIsPlacePopupOpen(false);
    setIsAvatarPopupOpen(false);
    setSelectedCard(false);
    setIsConfirmPopupOpen(false);
  };

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  useEffect(() => {
    api
      .getCards()
      .then((data) => {
        setCards(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
      <main className="content">
        <section className="profile">
          <img
            className="avatar"
            src={userAvatar}
            alt="imagen del rostro del determinado perfil"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <div className="profile__vector">
            <img
              className="vector"
              src={vector}
              alt="imagen del rostro del determinado perfil"
              onClick={handleEditAvatarClick}
            />
          </div>
          <div className="profile__description">
            <h2 className="profile__description-name">{userName}</h2>
            <h3 className="profile__description-info">{userDescription}</h3>
          </div>
          <button
            className="edit-button"
            src={editButton}
            onClick={handleEditProfileClick}
          ></button>
          <button
            className="add-button"
            src={addButton}
            onClick={handleAddPlaceClick}
          ></button>
        </section>
        {/* <section className="contelements"></section> */}
        <section className="contelements">
          <Card cards={cards} onCardClick={handleCardClick} onDeleteCard={handleDeletingCardClick} />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </section>
        {/* EDIT PROFILE MODAL */}
        <PopupWithForm
          name="profile"
          title="Editar perfil"
          isOpen={isProfilePopupOpen}
          onClose={closeAllPopups}
          nameButton="Guardar"
        >
          <input
            type="text"
            id="name-input"
            name="name"
            className="popup__container-texts-input-name form__input"
            placeholder="Nombre"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="form__input-error name-input-error"></span>
          <input
            type="text"
            id="about-input"
            name="job"
            className="popup__container-texts-input-info form__input"
            placeholder="Acerca de mi"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="form__input-error about-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
        name="deleting"
        title="¿Estás seguro/a?"
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        nameButton="Si"
        > 
        </PopupWithForm>
        <PopupWithForm
          name="place"
          title="Nuevo lugar"
          isOpen={isPlacePopupOpen}
          onClose={closeAllPopups}
          nameButton="Crear"
        >
          <input
            type="text"
            id="title-input"
            name="name"
            className="popup__container-texts-input-title form__input"
            placeholder="Titulo"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="form__input-error title-input-error"></span>
          <input
            type="url"
            id="url-input"
            name="link"
            className="popup__container-texts-input-link form__input"
            placeholder="Enlace a la imagen"
            required
          />
          <span className="form__input-error url-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Cambiar foto de perfil"
          isOpen={isAvatarPopupOpen}
          onClose={closeAllPopups}
          nameButton="Cambiar"
        >
          <input
            type="url"
            id="avatar-input"
            name="link"
            className="popup__container-texts-input-link form__input"
            placeholder="Enlace a la url"
            required
          />
          <span className="form__input-error url-input-error"></span>
        </PopupWithForm>
      </main>
  );
}

export default AppMain;
