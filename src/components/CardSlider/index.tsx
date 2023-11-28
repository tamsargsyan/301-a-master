import { useState } from "react";
import ARROW from "../../assets/arrow.svg";
import "./index.css";
import Button from "../Button";

interface CardSliderProps {
  data: any;
  handleAccountType: any;
}

const CardSlider: React.FC<CardSliderProps> = ({ data, handleAccountType }) => {
  const [active, setActive] = useState(0);

  const prevSlide = () => {
    setActive((active - 1 + data.length) % data.length);
  };

  const nextSlide = () => {
    setActive((active + 1) % data.length);
  };

  return (
    <div className='card_slider'>
      {data.map((card: any, index: number) => (
        <div
          key={index}
          className='card-container'
          style={
            {
              "--offset": (active - index) / 3,
              "--abs-offset": Math.abs(active - index) / 3,
              "--direction": Math.sign(active - index),
              "--opacity": Math.abs(active - index) <= 1 ? 1 : 0,
              "--active": index === active ? 1 : 0,
            } as React.CSSProperties
          }>
          <div
            className='accountType'
            key={card.id}
            id={`accountType-${card.id}`}>
            <div className=''>
              <div className='accountType_header'>
                <img
                  src={card.icon}
                  alt='Account'
                  decoding='async'
                  loading='lazy'
                />
                <span>{card.name}</span>
              </div>
              <div className='accountType_mainImg'>
                <img
                  src={card.mainImg}
                  alt='Account Main'
                  decoding='async'
                  loading='lazy'
                />
              </div>
            </div>
            <Button
              text={card.btn}
              style={{
                ...card.btnStyle,
                color: "#fff",
                border: "none",
              }}
              className='accountType_btn'
              link={false}
              to={""}
              onClick={() => handleAccountType(card.id, card.name, card.type)}
            />
          </div>
        </div>
      ))}
      <button className='nav left' onClick={prevSlide}>
        <img src={ARROW} alt='Arrow' decoding='async' loading='lazy' />
      </button>
      <button className='nav right' onClick={nextSlide}>
        <img src={ARROW} alt='Arrow' decoding='async' loading='lazy' />
      </button>
    </div>
  );
};

export default CardSlider;
