import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div>
        <div className="section">
          <div className="conteiner">
            <div className="notfound-container">
              <h2 className="notfound-title"> Ошибка 404</h2>
              <p className="notfound-description">Страница не найдена</p>
              <Link to="/" className="notfound-home-link">
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NotFound;
