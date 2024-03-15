import mentor from "../assets/images/mentor.png";
import btnArrow from "../assets/images/btnArrow.svg";
import btnArrowWhite from "../assets/images/btnArrowWhite.svg";

export const AboutMe: React.FC = () => {
  return (
    <div className="container">
      <main className="consultingWrapper">
        <div className="margin-block">
          <div className="consulting">
            <h1 className="consulting__title">
              Создаю условия для вашего успеха
            </h1>

            <p className="consulting__subtitle">
              <span className="consulting__subtitle-text">
                Когда ваше время и энергия лучше сфокусированы, стремление к
                новым возможностям становится реальностью, ваш успех зависит от
                ваших действий
              </span>
            </p>

            <div className="consulting__buttons">
              <button className="consulting__btn">
                <span>Записаться на консультацию</span>

                <img className="btnArrow" src={btnArrow} alt="" />
              </button>
              <button className="consulting__btnFree">
                <span>Бесплатная консультация</span>
                <img className="btnArrow" src={btnArrowWhite} alt="" />
              </button>
            </div>

            <div className="consulting__additionalInformation">
              <div className="quantity">
                <div className="quantity__number">130+</div>
                <p className="quantity__text">техник для достижения целей</p>
              </div>
              <div className="percent">
                <div className="percent__number">250%</div>
                <p className="percent__text">
                  увеличение личной продуктивности
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mentor">
          <img src={mentor} alt="image doesn't work" />
        </div>
      </main>
    </div>
  );
};
