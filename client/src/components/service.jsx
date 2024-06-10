import React from 'react';
import ContactUsToday from "./contactUsToday";
import axios from 'axios';
import { useState } from 'react';
import PopUp from './popUp'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema }from "./contactUsToday";
import { useTranslation } from "react-i18next";
import KaspiPay from '../images/kaspiPay.png';
import BccPay from '../images/logobcc.png';

export function Service () {
    const [status, setStatus] = useState(null);
    const [popupMessage, setPopupMessage] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const { t, i18n } = useTranslation();

    const { register, handleSubmit, errors, reset } = useForm({resolver: yupResolver(schema),});
    const services = [
      {
          name: t('service.table.services.name'),
          description: t('service.table.services.description'),
          price: t('service.table.services.price'),
      },
      {
        name: t('service.table.services.name1'),
        description: t('service.table.services.description1'),
        price: t('service.table.services.price1'),
      },
      {
        name: t('service.table.services.name2'),
        description: t('service.table.services.description2'),
        price: t('service.table.services.price2'),
      },
      {
        name: t('service.table.services.name3'),
        description: t('service.table.services.description3'),
        price: t('service.table.services.price3'),
      },
      {
        name: t('service.table.services.name4'),
        description: t('service.table.services.description4'),
        price: t('service.table.services.price4'),
    },
      {
        name: t('service.table.services.name5'),
        description: t('service.table.services.description5'),
        price: t('service.table.services.price5'),
      },
      {
        name: t('service.table.services.name6'),
        description: t('service.table.services.description6'),
        price: t('service.table.services.price6'),
      },
      {
        name: t('service.table.services.name7'),
        description: t('service.table.services.description7'),
        price: t('service.table.services.price7'),
      },
      {
        name: t('service.table.services.name8'),
        description: t('service.table.services.description8'),
        price: t('service.table.services.price8'),
      },
      
      {
        name: t('service.table.services.name9'),
        description: t('service.table.services.description9'),
        price: t('service.table.services.price9'),
      }
  ];

    const handleFormSubmit = async (data) => {
      try {
        // console.log(reset);
        const response = await axios.post("https://vitadentt-server-v2.vercel.app/send-email", data);
        setStatus('Success! Email sent.');
        setPopupMessage('Письмо успешно отправлено!');
        setIsSuccess(true);
        reset();
        
      } catch (error) {
        setStatus('Error: Email not sent.');
        setPopupMessage('Произошла ошибка при отправке письма.');
        setIsSuccess(false);
      }
    };
    return (
      <div>
        <div className="section">
          <div className="container title">
            <h2>{t('service.heading')} </h2>
            <p>{t('service.title')}</p>
            <div className="pay"> 
                <img src={KaspiPay} alt="Kaspi Pay" />
                <img src={BccPay} alt="Kaspi Pay" />
              </div>
            <div className="containerTable">
              <table className="table">
                <thead>
                  <tr>
                    <th>{t('service.table.title.text1')}</th>
                    <th>{t('service.table.title.text2')}</th>
                    <th>{t('service.table.title.text3')}</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={index}>
                      <td className="service-name">{service.name}</td>
                      <td>{service.description}</td>
                      <td>
                        {service.price === 0 ? (
                          <span className="special-price">
                            Special Price: {service.price}
                          </span>
                        ) : (
                          <span className="price">{service.price}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ContactUsToday onSubmit={handleFormSubmit} reset={reset} />
      {/* {status && <p>{status}</p>} */}
      <PopUp message={popupMessage} isSuccess={isSuccess} />
      </div>
    );
};
export default Service
