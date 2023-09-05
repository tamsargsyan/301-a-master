import React, { Fragment, useEffect } from "react";
import Background from "../../components/Background";
import SAGES from "../../assets/info/1.svg";
import Button from "../../components/Button";
import "./index.css";
import EcoSystemDetailsMember from "../../components/EcosystemDetailsMember";
import Footer from "../../components/Footer";
import { scrollToTop } from "../../globalFunctions/scrollToTop";

const EcoSystemDetails = () => {
  const arr = new Array(3).fill("");

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Background style={{ flexDirection: "column" }}>
        <div className='ecosystemDetails'>
          <div className='ecosystemDetails-header'>
            <div className='ecosystemDetails-title'>
              <img src={SAGES} alt='Ecosystem' />
              <h1>Мудрецы</h1>
            </div>
            <div className='ecosystemDetails-content'>
              <p>
                В рамках проекта на постоянное жительство в Армению переедет 301
                мудрец. Это люди больше чем просто профессионалы в своей
                области, это мудрецы — мыслители и деятели, люди большого ума с
                нестандартным мышлением и неожиданными взглядами. В Армении
                будут созданы все условия для реализации их идей, что должно
                привести к осуществлению ряда прорывных проектов.На сегодняшний
                день ядро Фонда составляют четыре мудреца, приехавших в Армению
                из разных стан мира и решивших связать свою жизнь с армянской
                землей.
              </p>
            </div>
            <Button
              text='recommented'
              link={false}
              to={""}
              style={{
                background: "#DD264E",
                boxShadow: "-21px 16px 38px 0px rgba(191, 9, 48, 0.21)",
                color: "#fff",
                marginLeft: "auto",
              }}
            />
          </div>
          {arr.map((_, i) => (
            <Fragment key={i}>
              <EcoSystemDetailsMember />
            </Fragment>
          ))}
        </div>
      </Background>
      <Footer />
    </>
  );
};

export default EcoSystemDetails;
