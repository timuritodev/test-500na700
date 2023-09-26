import React, { useState } from "react";
import "./Form.scss";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleButtonClick = () => {
    if (isButtonClicked) {
      setIsButtonClicked(false);
    } else {
      setIsButtonClicked(true);
    }
  };

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
            value={email}
            onChange={handleEmailChange}
            className="input__field"
          />
          <input
            type="text"
            placeholder="11.02.2022"
            value={date}
            onChange={handleDateChange}
            className="input__field"
          />
          <input
            type="tel"
            placeholder="Номер телефона"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="input__field"
          />
          <input
            type="text"
            placeholder="15:00"
            value={time}
            onChange={handleTimeChange}
            className="input__field"
          />
        </div>
        <button
          className={`form__button ${isButtonClicked ? "clicked" : ""}`}
          onClick={handleButtonClick}
        >
          Подписаться
        </button>
      </div>
    </div>
  );
};
