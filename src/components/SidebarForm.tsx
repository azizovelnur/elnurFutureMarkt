import { useEffect, useState } from "react";
import closeBtnIcon from "../assets/images/closeBtn.svg";
import btnArrowWhite from "../assets/images/btnArrowWhite.svg";
import { RequestConfirmation } from "./RequestConfirmation";

type SidebarFormProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarForm: React.FC<SidebarFormProps> = ({
  active,
  setActive,
}) => {
  const blurBackground = () => {
    document.body.style.overflow = "hidden";
  };

  const removeBlur = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (active) {
      blurBackground();
    } else {
      removeBlur();
    }
  }, [active]);

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <aside className={`sidebar ${active ? "active" : ""}`}>
      <img
        className="sidebar__close-btn"
        onClick={() => setActive(false)}
        src={closeBtnIcon}
        alt="closeIcon"
      />

      {!formSubmitted ? (
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="form__title">Закажите обратный звонок</h2>

          <div className="form__input">
            <input className="form__input-name" placeholder="ИМЯ" type="text" />
            <input
              className="form__input-phone"
              placeholder="ТЕЛЕФОН"
              type="text"
            />
          </div>
          <label className="toggle">
            <input
              className="toggle__input"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <div className="toggle__checkbox-btn"></div>
            <div className="toggle__text">
              Согласен на сохранение и обработку персональных данных
            </div>
          </label>
          <button className="form__btn" disabled={!isChecked}>
            <span>Заказать обратный звонок</span>
            <img className="btnArrow" src={btnArrowWhite} alt="" />
          </button>
        </form>
      ) : (
        <RequestConfirmation />
      )}
    </aside>
  );
};
