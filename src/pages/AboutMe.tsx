import mentor from "../assets/images/mentor.png";
import btnArrow from "../assets/images/btnArrow.svg";
import btnArrowWhite from "../assets/images/btnArrowWhite.svg";

export const AboutMe: React.FC = () => {
  return (
    <div className="container">
      <main className="consulting-wrapper">
        <div className="consulting">
          <h1 className="consulting__title">
            Создаю условия для вашего успеха
          </h1>

          <p className="consulting__subtitle">
            <span className="consulting__subtitle-text">
              Когда ваше время и энергия лучше сфокусированы, стремление к новым
              возможностям становится реальностью, ваш успех зависит от ваших
              действий
            </span>
          </p>

          <div className="consulting__buttons">
            <button className="consulting__buttons-btn">
              <span>Записаться на консультацию</span>
              <img className="btnArrow" src={btnArrow} alt="" />
            </button>
            <button className="consulting__buttons-btnfree">
              <span>Бесплатная консультация</span>
              <img className="btnArrow" src={btnArrowWhite} alt="" />
            </button>
          </div>

          <div className="consulting__additional-information">
            <div className="consulting__quantity">
              <div className="consulting__quantity-number">130+</div>
              <p className="consulting__quantity-text">
                техник для достижения целей
              </p>
            </div>
            <div className="consulting__percent">
              <div className="consulting__percent-number">250%</div>
              <p className="consulting__percent-text">
                увеличение личной продуктивности
              </p>
            </div>
          </div>
        </div>
        <div className="consulting__mentor-img">
          <img src={mentor} alt="image doesn't work" />
        </div>
      </main>
    </div>
  );
};
