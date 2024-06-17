import logo from "./../images/logo.webp";
import { slide as Menu } from 'react-burger-menu';
import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const lngs = {
  kz: { NativeName: 'Қаз' },
  ru: { NativeName: 'Рус' }
};

export function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  // Закрытие меню при переходе на другую страницу
  useEffect(() => {
    const handleCloseMenu = () => {
      setIsOpen(false);
    };

    // Слушаем изменения в history (навигации)
    const unlisten = history.listen(handleCloseMenu);

    // Очистка эффекта при размонтировании компонента
    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <header className="header">
      <div className="containerHeader">
        <div className="logo">
          <NavLink to="/main">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        <nav id="menu" className="menu">
          <ul>
            <li>
              <NavLink to="/contact" activeClassName="active">
                {t('header.menu.contact')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs" activeClassName="active">
                {t('header.menu.aboutUs')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" activeClassName="active">
                {t('header.menu.service')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" activeClassName="active">
                FAQ
              </NavLink>
            </li>

            <div className="language-switcher">
              {Object.keys(lngs).map((lng) => (
                <button
                  className="buttonLanguage"
                  type="button"
                  key={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                  disabled={i18n.resolvedLanguage === lng}
                >
                  {lngs[lng].NativeName}
                </button>
              ))}
            </div>
          </ul>

          <Menu
            isOpen={isOpen}
            onStateChange={(state) => setIsOpen(state.isOpen)}
            right
            width={"350px"}
          >
            <NavLink to="/contact" id="contact" className="menu-item">
              {t('header.menu.contact')}
            </NavLink>
            <NavLink to="/aboutUs" id="team" className="menu-item">
              {t('header.menu.aboutUs')}
            </NavLink>
            <NavLink to="/service" id="services" className="menu-item">
              {t('header.menu.service')}
            </NavLink>
            <NavLink to="/faq" id="faq" className="menu-item">
              FAQ
            </NavLink>
            <div className="language-switcher">
              {Object.keys(lngs).map((lng) => (
                <button
                  className="buttonLanguage"
                  type="button"
                  key={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                  disabled={i18n.resolvedLanguage === lng}
                >
                  {lngs[lng].NativeName}
                </button>
              ))}
            </div>
          </Menu>
          <div
            className={`bm-overlay ${isOpen ? "bm-overlay-open" : ""}`}
            onClick={() => setIsOpen(false)}
          ></div>
        </nav>
      </div>
    </header>
  );
}
