import React, { useState, useRef } from "react";
import { NavLink, } from 'react-router-dom'
import smile from "./../images/smile.jpg";
import SecondImage from "./../images/secondImg.jpeg";
import ThirdImg from "./../images/ThirdImg.jpg";
import fouthImg from "./../images/fouthImg.jpeg";
import fifthImg from "./../images/fifthImg.jpeg";
import { useTranslation } from "react-i18next";
import axios from "axios";
import ContactUsToday from "./contactUsToday";
import PopUp from "./popUp";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./contactUsToday";

export function Main() {
  const { t, i18n } = useTranslation();
  const [status, setStatus] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (data) => {
    try {
      // console.log(reset);
      const response = await axios.post(
        "https://vitadentt-server-v2.vercel.app/send-email",
        data
      );
      setStatus("Success! Email sent.");
      setPopupMessage("Письмо успешно отправлено!");
      setIsSuccess(true);
      reset();
    } catch (error) {
      setStatus("Error: Email not sent.");
      setPopupMessage("Произошла ошибка при отправке письма.");
      setIsSuccess(false);
    }
  };
  const targetRef = useRef(null);
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <main>
      <section className="section">
        <div className="container wrapper">
          <div className="discription">
            <h2>{t("main.container1.heading")}</h2>
            <p>
              {t("main.container1.description")}
            </p>
            <button className="btn" onClick={scrollToTarget}>
            {t("main.button.signUp")}
            </button>
          </div>
          <div className="image">
            <img id="imageOne" src={smile} alt="Ulybka" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container wrapper">
          <div className="discription">
            <h2>{t("main.container2.heading")}</h2>
            <p>
            {t("main.container2.description")}
              
            </p>
            <NavLink to="/contact">
              <button className="btn">{t("main.button.go")}</button>
            </NavLink>
          </div>
          <div className="image">
            <img src={SecondImage} alt="stul" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="containerReverse">
          <div className="discription">
            <h2>{t("main.container3.heading")}</h2>
            <p>
            {t("main.container3.description")}
            </p>
            <NavLink to="/service">
              <button className="btn">{t("main.button.go")}</button>
            </NavLink>
          </div>
          <div className="image">
            <img src={ThirdImg} alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container wrapper">
          <div className="discription">
          <h2>{t("main.container4.heading")}</h2>
            <p>
            {t("main.container4.description")}

            </p>
            <NavLink to="/faq">
              <button className="btn">{t("main.button.go")}</button>
            </NavLink>
          </div>
          <div className="image">
            <img src={fouthImg} alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="containerReverse">
          <div className="discription">
          <h2>{t("main.container5.heading")}</h2>
          <p>
            {t("main.container5.description")}
          </p>
            <NavLink to="/aboutUs">
              <button className="btn">{t("main.button.go")}</button>
            </NavLink>
          </div>
          <div className="image">
            <img src={fifthImg} alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container wrapper" id="containerRecall">
          <div className="recall">
            <p>
            {t("main.recall.text")}
            </p>
            <h2>{t("main.recall.name")}</h2>
          </div>
        </div>
      </section>
      <ContactUsToday
        onSubmit={handleFormSubmit}
        reset={reset}
        ref={targetRef}
      />

      {/* {status && <p>{status}</p>} */}
      <PopUp message={popupMessage} isSuccess={isSuccess} />
    </main>
  );
}
