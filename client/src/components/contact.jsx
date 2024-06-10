import React from "react";
import MapContainer from "./map";
import ContactUsToday, { schema } from "./contactUsToday";
import axios from "axios";
import { useState } from "react";
import PopUp from "./popUp";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import KaspiPay from '../images/kaspiPay.png';
import BccPay from '../images/logobcc.png';


export function Contact() {
  const [status, setStatus] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { reset } = useForm({resolver: yupResolver(schema),});
  const { t } = useTranslation();
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

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="discription">
            <h2>VitadentT</h2>
            <p>{t('contact.adress')}</p>
            <div>
              <p>+7 (7212) 32‒34‒13</p>
              <p>+7‒775‒534‒58‒13</p>
              <p>+7‒778‒100‒47‒13</p>
            </div>
            <div>
              <p>{t('contact.workSchedule.text1')}</p>
              <p>{t('contact.workSchedule.text2')}</p>
              <p>{t('contact.workSchedule.text3')}</p>
              <p>{t('contact.workSchedule.text4')}</p>
              <div className="pay"> 
                <img src={KaspiPay} alt="Kaspi Pay" />
                <img src={BccPay} alt="Kaspi Pay" />
              </div>
              
            </div>
          </div>
          <div className="mapDiscription">
            <MapContainer />
          </div>
        </div>
      </div>
      <ContactUsToday onSubmit={handleFormSubmit} reset={reset} />
      {/* {status && <p>{status}</p>} */}
      <PopUp message={popupMessage} isSuccess={isSuccess} />
    </div>
  );
}
