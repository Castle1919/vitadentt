import logo from "./../images/logo.png";
import { slide as Menu } from 'react-burger-menu'
import React, { useState } from "react";
import { NavLink, } from 'react-router-dom'
import { useTranslation } from "react-i18next";



const lngs = {
  kz: {NativeName: 'Қаз'},
  ru: {NativeName: 'Рус'}
};

        {/* <div>
          <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
            {Object.keys(lngs).map((lng) => (
              <option key={lng} value={lng}>
                {lngs[lng].NativeName}
              </option>
            ))}
          </select>
        </div> */}

export function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  let isMenuOpen = function(state) {
    return state.isOpen;
  };
  return (
    <header className="header">
      <div className="containerHeader">
        <div className="logo">
          <NavLink to="/main">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        <nav id="menu " className="menu">
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
              <NavLink to="/faq" activeClassName="active"> FAQ </NavLink>
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
    Контакты
  </NavLink>
  <NavLink to="/aboutUs" id="team" className="menu-item">
    О нас
  </NavLink>
  <NavLink to="/service" id="services" className="menu-item">
    Услуги
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
