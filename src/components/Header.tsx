import { NavLink } from "react-router-dom";
import phoneIcon from "../assets/images/phoneIcon.svg";
import menu from "../assets/images/menu.svg";
import { useState } from "react";

import closeIcon from "../assets/images/closeBtn.svg";

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<Boolean>(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <NavLink to="/" className="logo">
            ALEX. SHEVTSOV
          </NavLink>
          <nav className={`header__navigation ${openMenu ? "active" : ""}`}>
            <ul className="header__navigation-items">
              <li className="header__navigation-item">
                <NavLink className="header__navigation-link" to="/">
                  Обо мне
                </NavLink>
              </li>
              <li className="header__navigation-item">
                <NavLink className="header__navigation-link" to="/">
                  Наставничество
                </NavLink>
              </li>
              <li className="header__navigation-item">
                <NavLink className="header__navigation-link" to="/">
                  Мероприятия
                </NavLink>
              </li>
              <li className="header__navigation-item">
                <NavLink className="header__navigation-link" to="/">
                  Кейсы
                </NavLink>
              </li>
              <li className="header__navigation-item">
                <NavLink className="header__navigation-link" to="/">
                  Отзывы
                </NavLink>
              </li>
              <li className="header__navigation-item">
                <NavLink className="header__navigation-link" to="/">
                  Контакты
                </NavLink>
              </li>
            </ul>

            <button
              className="header__navigation-close"
              onClick={() => setOpenMenu(false)}
            >
              <img src={closeIcon} alt="" />
            </button>
          </nav>

          <div className="header__menu">
            <button
              onClick={() => setOpenMenu(true)}
              className="header__menu-btn"
            >
              <img className="header__menu-img" src={menu} alt="phoneIcon" />
            </button>
            <div>
              <a href="tel:+83451233445" className="header__phone-link">
                <img
                  className="header__phone-icon"
                  src={phoneIcon}
                  alt="phoneIcon"
                />
              </a>
            </div>
          </div>
          <div className="header__phone">
            <a href="tel:+83451233445" className="header__phone-link">
              <img
                className="header__phone-icon"
                src={phoneIcon}
                alt="phoneIcon"
              />
              <p>8-345-123-34-45</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
