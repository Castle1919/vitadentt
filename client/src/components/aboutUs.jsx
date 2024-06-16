import React, { useState } from 'react';
import PopUp from './popUp'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema }from "./contactUsToday";
import { useTranslation } from "react-i18next";
import ContactUsToday from "./contactUsToday";
import axios from 'axios';
import arrow1 from './../images/arrows/arrow1.png'
import stomatSurgeon from './../images/photo_2024-05-30_00-00-17.jpg'
import stomatTherapist from './../images/photo_2024-05-30_00-00-18.jpg'
import nurse from './../images/photo_2024-05-30_00-00-16.jpg'


export const AboutUs = () => {
  const { t } = useTranslation();

  // Form
  const [status, setStatus] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  
  
  const handleFormSubmit = async (data, reset) => {
    if (isSubmitting) return; // Проверка, отправляется ли форма
    setIsSubmitting(true); // Установка состояния отправки

    try {
      const response = await axios.post(
        "https://vitadentt-server-v2.vercel.app/send-email",
        data
      );
      setStatus("Success! Email sent.");
      setPopupMessage("Письмо успешно отправлено!");
      setIsSuccess(true);
      reset(); // Сброс формы
    } catch (error) {
      setStatus("Error: Email not sent.");
      setPopupMessage("Произошла ошибка при отправке письма.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false); // Сброс состояния отправки после завершения
    }
  };



  // Slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: stomatSurgeon,
      name: t('aboutUs.slider.stomatSurgeon.name'),
      specialist: t('aboutUs.slider.stomatSurgeon.specialist'),
      seniority: t('aboutUs.slider.stomatSurgeon.seniority'),
      description: t('aboutUs.slider.stomatSurgeon.description'),
    },
    {
      image: stomatTherapist,
      name: t('aboutUs.slider.stomatTherapist.name'),
      specialist: t('aboutUs.slider.stomatTherapist.specialist'),
      seniority: t('aboutUs.slider.stomatTherapist.seniority'),
      description: t('aboutUs.slider.stomatTherapist.description'),
    },
    {
      image: nurse,
      name: t('aboutUs.slider.nurse.name'),
      specialist: t('aboutUs.slider.nurse.specialist'),
      seniority: t('aboutUs.slider.nurse.seniority'),
      description: t('aboutUs.slider.nurse.description'),
    },

  ];

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  return (
    <div>
      <div className="section">
        <div className="container title">
          <h2>
          {t("aboutUs.title.heading")
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}{" "}
          </h2>
          <p>
          {t('aboutUs.title.description')}
          </p>
          <h2 className='m-auto'>{t('aboutUs.title.heading2')}</h2>
        </div>
        <div className='containerWrapper'>
        <div className="containerSlider">
          <div className="slider" >
            <div className="sliderImages">
              <img src={slides[currentIndex].image} alt="Slide image" />
            </div>
            <div className="slider-controls">
              <div className="left-controls">
                <button className="prev" onClick={handlePrev}>
                  <img src={arrow1} alt="Arrow 1" />
                </button>
              </div>
              <div className="right-controls">
                <button className="next" onClick={handleNext}>
                  <img src={arrow1} alt="Arrow 1" />
                </button>
              </div>
            </div>
          </div>
        </div>
          <div className="textWrapper">
            <div className="sliderTextName">{slides[currentIndex].name}</div>
            <div className="sliderTextSpecialist">
              {slides[currentIndex].specialist}
            </div>
            <div className="sliderTextDescription">
              {slides[currentIndex].seniority} <br/>
              {slides[currentIndex].description}
            </div>
          </div>
        </div>
      </div>
      <ContactUsToday onSubmit={handleFormSubmit} reset={reset} />
      <PopUp message={popupMessage} isSuccess={isSuccess} />
    </div>
  );
};

export default AboutUs;