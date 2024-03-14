import { NavLink } from "react-router-dom";
import phoneIcon from "../assets/images/phoneIcon.svg";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__items">
          <div className="header__logo">ALEX. SHEVTSOV</div>
          <nav className="navigation">
            <ul className="navigation__items">
              <li>
                <NavLink to="/">Обо мне</NavLink>
              </li>
              <li>
                <NavLink to="/">Наставничество</NavLink>
              </li>
              <li>
                <NavLink to="/">Мероприятия</NavLink>
              </li>
              <li>
                <NavLink to="/">Кейсы</NavLink>
              </li>
              <li>
                <NavLink to="/">Отзывы</NavLink>
              </li>
              <li>
                <NavLink to="/">Контакты</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__phone">
            <img src={phoneIcon} alt="phoneIcon" />
            <p>8-345-123-34-45</p>
          </div>
        </div>
      </div>
    </header>
  );
};
