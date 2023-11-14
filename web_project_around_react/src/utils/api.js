const parse5 = require('parse5');
import React from "react";

class Api {
  constructor() {
    this._token = "64bdc8e1-28e5-4d06-acdb-847b17c56560";
    this._groupId = "web_es_09";
    this._url = `https://around.nomoreparties.co/v1/${this._groupId}/`;
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: `GET`,
      headers: {
        authorization: this._token,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  getCards() {
    return fetch(`${this._url}cards`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
}

const api = new Api();

export default api;
