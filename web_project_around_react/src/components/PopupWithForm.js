import React from 'react';
import closeButton from '../images/close_button.svg';

function PopupWithForm({ name, title, children, isOpen, onClose, nameButton }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__container form" noValidate>
        <fieldset className="popup__container-texts">
          <h3 className="popup__container-title">{title}</h3>
          {children}
          <button type="button" className="popup__container-btn-closed" onClick={onClose}>
            <img src={closeButton} alt="boton de cerrar" />
          </button>
        </fieldset>
        <fieldset className="popup__handlers">
          <button type="submit" className="popup__handlers-button form__submit" disabled>
            {nameButton}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default PopupWithForm;