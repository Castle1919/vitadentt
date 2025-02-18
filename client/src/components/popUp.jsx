import React, { useState, useEffect } from 'react';
import successIcon from '../images/success-icon.svg';
import errorIcon from '../images/error-icon.svg';

function PopUp({ message, isSuccess }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className={`iconPopUp ${isSuccess ? 'iconPopUp-success' : 'iconPopUp-error'}`}>
        <img src={isSuccess ? successIcon : errorIcon} alt={isSuccess ? 'Успех' : 'Ошибка'} />
      </div>
      <h2>{isSuccess ? 'Письмо отправлено' : 'Ошибка отправки'}</h2>
      <p>{message}</p>
    </div>
  );
}

export default PopUp;