import React from "react";
import "./Form.scss";

export const Form = () => {
  return (
    <div className="form">
      <div className="form__container">
        <h2 className="form__title">Подпишись</h2>
        <p className="form__subtitle">
          Отправляем анонсы новых статей, выпусков и трансляций
        </p>
        <div className="form__input-container">
          <input
            type="email"
            placeholder="Email"
            value={""}
            onChange={""}
            className="input__field"
          />
          <input
            type="tel"
            placeholder="Номер телефона"
            value={""}
            onChange={""}
            // pattern="[+]7 [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}"
            className="input__field"
          />
        </div>
      </div>
    </div>
  );
};
