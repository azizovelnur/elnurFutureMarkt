import mentor from "../assets/images/mentor.png";
import btnArrow from "../assets/images/btnArrow.svg";
import btnArrowWhite from "../assets/images/btnArrowWhite.svg";
import { useEffect, useState } from "react";
import { SidebarForm } from "../components/SidebarForm";
import axios from "axios";

type TextState = {
  subtitleText: string;
  buttonText: string;
  buttonFreeText: string;
  quantityText: string;
  percentText: string;
};

export const AboutMe: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [gbpRate, setGbpRate] = useState<number>(0);
  const [dateSum, setDateSum] = useState<number>(0);

  const [textState, setTextState] = useState<TextState>({
    subtitleText: "",
    buttonText: "",
    buttonFreeText: "",
    quantityText: "",
    percentText: "",
  });

  useEffect(() => {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString();
    let sum = 0;
    for (let i = 0; i < dateString.length; i++) {
      const char = dateString.charAt(i);
      if (!isNaN(parseInt(char))) {
        sum += parseInt(char);
      }
    }
    setDateSum(sum);
  }, []);

  useEffect(() => {
    const getGbpRate = async () => {
      try {
        const response = await axios.get(
          "https://www.cbr-xml-daily.ru/daily_json.js"
        );
        const data = response.data;
        const gbpRate = data.Valute.GBP.Value;
        const roundedValue = Math.round(gbpRate);
        setGbpRate(roundedValue);
      } catch (error) {
        console.error("Error fetching GBP rate:", error);
      }
    };

    getGbpRate();
  }, []);

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
              tabIndex={1}
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
              tabIndex={2}
            >
              <span>{textState.buttonFreeText}</span>
              <img className="btnArrow" src={btnArrowWhite} alt="" />
            </button>
          </div>

          <SidebarForm active={active} setActive={setActive} />

          {active && <div className="blur"></div>}

          <div className="consulting__additional-information">
            <div className="consulting__quantity">
              <div className="consulting__quantity-number">{dateSum}+</div>
              <p className="consulting__quantity-text">
                {textState.quantityText}
              </p>
            </div>
            <div className="consulting__percent">
              <div className="consulting__percent-number">{gbpRate}%</div>
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
