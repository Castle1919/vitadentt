import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PopUp from "./popUp";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./contactUsToday";
import { useTranslation } from "react-i18next";
import ContactUsToday from "./contactUsToday";
import axios from "axios";

const FAQ = () => {
  const { t } = useTranslation();
  //Form
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
        "http://localhost:5000/send-email",
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

  const faqs = [
    {
      category: t("faq.buttons.categoryDentalCare"),
      question: t("faq.faqs.categoryDentalCare.list1.question"),
      answer: t("faq.faqs.categoryDentalCare.list1.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalCare"),
      question: t("faq.faqs.categoryDentalCare.list2.question"),
      answer: t("faq.faqs.categoryDentalCare.list2.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalCare"),
      question: t("faq.faqs.categoryDentalCare.list3.question"),
      answer: t("faq.faqs.categoryDentalCare.list3.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalCare"),
      question: t("faq.faqs.categoryDentalCare.list4.question"),
      answer: t("faq.faqs.categoryDentalCare.list4.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalCare"),
      question: t("faq.faqs.categoryDentalCare.list5.question"),
      answer: t("faq.faqs.categoryDentalCare.list5.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalCare"),
      question: t("faq.faqs.categoryDentalCare.list6.question"),
      answer: t("faq.faqs.categoryDentalCare.list6.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalCare"),
      question: t("faq.faqs.categoryDentalCare.list7.question"),
      answer: t("faq.faqs.categoryDentalCare.list7.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalCare"),
      question: t("faq.faqs.categoryDentalCare.list8.question"),
      answer: t("faq.faqs.categoryDentalCare.list8.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalCare"),
      question: t("faq.faqs.categoryDentalCare.list9.question"),
      answer: t("faq.faqs.categoryDentalCare.list9.answer"),
    },

    {
      category: t("faq.buttons.categoryDentalDisease"),
      question: t("faq.faqs.categoryDentalDisease.list1.question"),
      answer: t("faq.faqs.categoryDentalDisease.list1.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalDisease"),
      question: t("faq.faqs.categoryDentalDisease.list2.question"),
      answer: t("faq.faqs.categoryDentalDisease.list2.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalDisease"),
      question: t("faq.faqs.categoryDentalDisease.list3.question"),
      answer: t("faq.faqs.categoryDentalDisease.list3.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalDisease"),
      question: t("faq.faqs.categoryDentalDisease.list4.question"),
      answer: t("faq.faqs.categoryDentalDisease.list4.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalDisease"),
      question: t("faq.faqs.categoryDentalDisease.list5.question"),
      answer: t("faq.faqs.categoryDentalDisease.list5.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalDisease"),
      question: t("faq.faqs.categoryDentalDisease.list6.question"),
      answer: t("faq.faqs.categoryDentalDisease.list6.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalDisease"),
      question: t("faq.faqs.categoryDentalDisease.list7.question"),
      answer: t("faq.faqs.categoryDentalDisease.list7.answer"),
    },
    {
      category: t("faq.buttons.categoryDentalDisease"),
      question: t("faq.faqs.categoryDentalDisease.list8.question"),
      answer: t("faq.faqs.categoryDentalDisease.list8.answer"),
    },

    {
      category: t("faq.buttons.categoryPay"),
      question: t("faq.faqs.categoryPay.list1.question"),
      answer: t("faq.faqs.categoryPay.list1.answer"),
    },
    {
      category: t("faq.buttons.categoryPay"),
      question: t("faq.faqs.categoryPay.list2.question"),
      answer: t("faq.faqs.categoryPay.list2.answer"),
    },
    {
      category: t("faq.buttons.categoryPay"),
      question: t("faq.faqs.categoryPay.list3.question"),
      answer: t("faq.faqs.categoryPay.list3.answer"),
    },
    {
      category: t("faq.buttons.categoryPay"),
      question: t("faq.faqs.categoryPay.list4.question"),
      answer: t("faq.faqs.categoryPay.list4.answer"),
    },
    {
      category: t("faq.buttons.categoryPay"),
      question: t("faq.faqs.categoryPay.list5.question"),
      answer: t("faq.faqs.categoryPay.list5.answer"),
    },
    {
      category: t("faq.buttons.categoryPay"),
      question: t("faq.faqs.categoryPay.list6.question"),
      answer: t("faq.faqs.categoryPay.list6.answer"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    t("faq.buttons.categoryDentalCare")
  );

  const handleClick = (index) => {
    const faq = filteredFaqs[index];
    if (faq.answer.includes(t('Контакты')) || faq.answer.includes(t('байланыс'))) {
      setActiveIndex(index === activeIndex && activeIndex !== null ? null : index);
    } else {
      setActiveIndex(index === activeIndex ? null : index);
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveIndex(null);
  };
  useEffect(() => {
    // Обновляем activeCategory при изменении языка
    setActiveCategory(t("faq.buttons.categoryDentalCare"));
  }, [t]);

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  return (
    <div>
      <div className="section">
        <div className="containerFaq w-5/6 m-auto flex justify-start items-center gap-[3.125rem] flex-col">
          <div className="w-10/12 flex gap-5 items-start">
            <h2 className="text-4xl md:text-5xl lg:text-[56px]">
              {t("faq.heading")}
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              className={`px-4 py-2 ${
                activeCategory === t("faq.buttons.categoryDentalCare")
                  ? "bg-blueThird text-white rounded-lg"
                  : "bg-white text-blueFirst border-2 border-blueSecond rounded-lg"
              }`}
              onClick={() =>
                handleCategoryClick(t("faq.buttons.categoryDentalCare"))
              }
            >
              {t("faq.buttons.categoryDentalCare")}
            </button>
            <button
              className={`px-4 py-2 ${
                activeCategory === t("faq.buttons.categoryPay")
                  ? "bg-blueThird text-white rounded-lg"
                  : "bg-white text-blueFirst border-2 border-blueSecond rounded-lg"
              }`}
              onClick={() => handleCategoryClick(t("faq.buttons.categoryPay"))}
            >
              {t("faq.buttons.categoryPay")}
            </button>
            <button
              className={`px-4 py-2 ${
                activeCategory === t("faq.buttons.categoryDentalDisease")
                  ? "bg-blueThird text-white rounded-lg"
                  : "bg-white text-blueFirst border-2 border-blueSecond rounded-lg"
              }`}
              onClick={() =>
                handleCategoryClick(t("faq.buttons.categoryDentalDisease"))
              }
            >
              {t("faq.buttons.categoryDentalDisease")}
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg border-[#38b5df] border-solid border-2 shadow-md w-full md:w-10/12">
            <ul className="divide-y divide-blueFirst">
              {filteredFaqs.map((faq, index) => (
                <li key={index} className="py-4">
                  <button
                    className="flex items-center justify-between w-full text-left text-gray-900"
                    onClick={() => handleClick(index)}
                  >
                    <span className="text-1xl md:text-2xl lg:text-2xl font-bold">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 transform transition-transform stroke-[#167495] ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="#167495"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeIndex === index && (
                        <p className="text-xs md:text-base lg:text-1xl mt-2 text-gray-700">
                        {faq.answer.split(" ").map((word, index) =>
                          word === t('Контакты') || word === t('байланыс') ? (
                            <Link
                              key={index}
                              to="/contact"
                              className="text-blueFirst font-medium hover:underline"
                            >
                              {word}
                            </Link>
                          ) : (
                            <span key={index}>{word} </span>
                          )
                        )}
                      </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ContactUsToday onSubmit={handleFormSubmit} reset={reset} />
      <PopUp message={popupMessage} isSuccess={isSuccess} />
    </div>
  );
};

export default FAQ;
