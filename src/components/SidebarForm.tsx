import { useEffect, useState } from "react";
import closeBtnIcon from "../assets/images/closeBtn.svg";
import btnArrowSidebar from "../assets/images/btnArrowSidebar.svg";
import { RequestConfirmation } from "./RequestConfirmation";

type SidebarFormProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarForm: React.FC<SidebarFormProps> = ({
  active,
  setActive,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<string>(localStorage.getItem("name") || "");
  const [phone, setPhone] = useState<string>(
    localStorage.getItem("phone") || ""
  );

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

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.trim() === "" || phone.trim() === "" || !isChecked) {
      return;
    }
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    setFormSubmitted(true);
  };

  return (
    <aside
      className={`sidebar ${active ? "active" : ""} ${
        formSubmitted ? "confirmation-active" : ""
      }`}
    >
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
            <input
              className="form__input-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ИМЯ"
              type="text"
            />
            <input
              className="form__input-phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
            <img className="btnArrow" src={btnArrowSidebar} alt="" />
          </button>
        </form>
      ) : (
        <RequestConfirmation />
      )}
    </aside>
  );
};
