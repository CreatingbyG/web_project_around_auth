import React, { useState, useEffect } from "react";
import "../vendor/normalize.css";
import "../fonts/inter.css";
import "./index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import api from "../utils/api.js";
import CurrentUserContext from "./contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js"; 
import EditAvatarPopup from "./EditAvatarPopup.js"; 
import AddPlacePopup from "./AddPlacePopup.js";
import ConfirmPopup from "./ConfirmPopup.js";



function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isPlacePopupOpen, setIsPlacePopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardToDelete, setCardToDelete] = useState(null);


const handleEditAvatarClick = () => {
  setIsEditAvatarPopupOpen(true);
};

const handleEditProfileClick = () => {
  setIsEditProfilePopupOpen(true);
};


const handleAddPlaceClick = () => {
  setIsPlacePopupOpen(true);
};

function handleTrashClick(card) {
  setIsConfirmPopupOpen(true);
  setCardToDelete(card);
}

function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya le han dado like
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Envía una petición a la API y obtén los datos actualizados de la tarjeta
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
} 

function handleCardDelete(card) {
  api.deleteCard(card._id).then(() => {
    setCards(cards.filter((c) => c._id !== card._id));
    setIsConfirmPopupOpen(false);
  });
}

  const closeAllPopups = () => {
    setIsPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
    setIsEditProfilePopupOpen(false);
    setIsConfirmPopupOpen(false);
  };



  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  useEffect(() => {
    api
      .getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);


  function handleUpdateUser({ name, about }) {
    api.setUserInfo({ name, about })
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar({ avatar }) { 
    api.setUserAvatar(avatar)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit(newCard) {
    api.addCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        setIsPlacePopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  
  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        cards={cards}
        handleCardLike={handleCardLike}
        handleCardClick={handleCardClick}
        selectedCard={selectedCard}
        handleEditAvatarClick={handleEditAvatarClick}
        handleEditProfileClick={handleEditProfileClick}
        handleAddPlaceClick={handleAddPlaceClick}
        closeAllPopups={closeAllPopups}
        handleCardDelete={handleCardDelete}
        handleTrashClick={handleTrashClick}
      Main/>
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <AddPlacePopup isOpen={isPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
      <ConfirmPopup isOpen={isConfirmPopupOpen} onClose={closeAllPopups} onDeleteCard={handleCardDelete} cardToDelete={cardToDelete}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
