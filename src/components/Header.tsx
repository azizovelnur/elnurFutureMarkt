import { NavLink } from "react-router-dom";
import phoneIcon from "../assets/images/phoneIcon.svg";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__items">
          <div className="logo">ALEX. SHEVTSOV</div>
          <nav className="header__navigation">
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
          </nav>
          <div className="header__phone">
            <a href="tel:+83451233445" className="header__phone-link">
              <img src={phoneIcon} alt="phoneIcon" />
              <p>8-345-123-34-45</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
