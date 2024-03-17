import mentor from "../assets/images/mentor.png";
import btnArrow from "../assets/images/btnArrow.svg";
import btnArrowWhite from "../assets/images/btnArrowWhite.svg";
import { useEffect, useState } from "react";
import { SidebarForm } from "../components/SidebarForm";

type TextState = {
  subtitleText: string;
  buttonText: string;
  buttonFreeText: string;
  quantityText: string;
  percentText: string;
};

export const AboutMe: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  const [textState, setTextState] = useState<TextState>({
    subtitleText: "",
    buttonText: "",
    buttonFreeText: "",
    quantityText: "",
    percentText: "",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 320 || window.innerWidth <= 1200) {
        setTextState({
          subtitleText: "Ваш успех зависит от ваших действий",
          buttonText: "Записаться",
          buttonFreeText: "Заказать звонок",
          quantityText: "техники",
          percentText: "продуктивности",
        });
      } else {
        setTextState({
          subtitleText:
            "Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью, ваш успех зависит от ваших действий",
          buttonText: "Записаться на консультацию",
          buttonFreeText: "Бесплатная консультация",
          quantityText: "техник для достижения целей",
          percentText: "увеличение личной продуктивности",
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <main className="consulting-wrapper">
        <div className="consulting">
          <h1 className="consulting__title">
            Создаю условия для вашего успеха
          </h1>

          <p className="consulting__subtitle">
            <span className="consulting__subtitle-text">
              {textState.subtitleText}
            </span>
          </p>

          <div className="consulting__buttons">
            <button
              onClick={() => {
                setActive(true);
                window.scrollTo({ top: 0 });
              }}
              className="consulting__buttons-btn"
            >
              <span>{textState.buttonText}</span>
              <img className="btnArrow" src={btnArrow} alt="" />
            </button>
            <button
              onClick={() => {
                setActive(true);
                window.scrollTo({ top: 0 });
              }}
              className="consulting__buttons-btnfree"
            >
              <span>{textState.buttonFreeText}</span>
              <img className="btnArrow" src={btnArrowWhite} alt="" />
            </button>
          </div>

          <SidebarForm active={active} setActive={setActive} />

          {active && <div className="blur"></div>}

          <div className="consulting__additional-information">
            <div className="consulting__quantity">
              <div className="consulting__quantity-number">130+</div>
              <p className="consulting__quantity-text">
                {textState.quantityText}
              </p>
            </div>
            <div className="consulting__percent">
              <div className="consulting__percent-number">250%</div>
              <p className="consulting__percent-text">
                {textState.percentText}
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
