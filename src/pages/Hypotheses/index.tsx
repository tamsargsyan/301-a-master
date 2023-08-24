import { useState } from "react";
import Button from "../../components/Button";
import "./index.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import DropDown from "../../components/Dropdown";

const btnStyle = {
  dropShadow: "-6px 6px 16px rgba(49, 58, 75, 0.11)",
  background: "#fff",
  border: "none",
  textTransform: "uppercase",
  width: "300px",
  height: "70px",
};

interface HypothesesProps {
  dataHypotheses: any;
}

const Hypotheses: React.FC<HypothesesProps> = ({ dataHypotheses }) => {
  const infos = [
    {
      id: 1,
      name: "страна мудрости",
      desc: [
        "Мы считаем, что мудрость лежит в основе существования армянского народа. Мудрость всегда была ключевой ценностью Армении, которая помогла армянам сохранить идентичность, культуру, независимость и пронести их через века.",
        "Возвращение к этому подходу — одна из основных задач нашего фонда. Армения должна стать домом для мудрецов, который невозможно разрушить. Мы ищем путь к такой Армении: размышляем о том, что мы, как люди страны мудрости, можем предложить миру; что есть у нас, чего нет больше ни у кого.",
        "Мы считаем, что Армения может стать территорией мудрости — местом, где объединяются умы и рождаются смыслы.",
        "Мы верим, что развитие науки, образования и культуры помогут в создании онтологической безопасности Армении и армянского народа.",
      ],
    },
    {
      id: 2,
      name: "страна остроумия",
      desc: [
        "Мы считаем, что мудрость лежит в основе существования армянского народа. Мудрость всегда была ключевой ценностью Армении, которая помогла армянам сохранить идентичность, культуру, независимость и пронести их через века. Возвращение к этому подходу — одна из основных задач нашего фонда. Армения должна стать домом для мудрецов, который невозможно разрушить. Мы ищем путь к такой Армении: размышляем о том, что мы, как люди страны мудрости, можем предложить миру; что есть у нас, чего нет больше ни у кого.",
        "Мы считаем, что Армения может стать территорией мудрости — местом, где объединяются умы и рождаются смыслы. ",
        "Мы верим, что развитие науки, образования и культуры помогут в создании онтологической безопасности Армении и армянского народа.",
      ],
    },
    {
      id: 3,
      name: "страна креономики и сенсаномики",
      desc: [
        "Мы считаем, что мудрость лежит в основе существования армянского народа. Мудрость всегда была ключевой ценностью Армении, которая помогла армянам сохранить идентичность, культуру, независимость и пронести их через века. Возвращение к этому подходу — одна из основных задач нашего фонда. Армения должна стать домом для мудрецов, который невозможно разрушить. Мы ищем путь к такой Армении: размышляем о том, что мы, как люди страны мудрости, можем предложить миру; что есть у нас, чего нет больше ни у кого.",
        "Мы считаем, что Армения может стать территорией мудрости — местом, где объединяются умы и рождаются смыслы. ",
        "Мы верим, что развитие науки, образования и культуры помогут в создании онтологической безопасности Армении и армянского народа.",
      ],
    },
    {
      id: 4,
      name: "«Красная книга» древнейших культур",
      desc: [
        "Мы считаем, что мудрость лежит в основе существования армянского народа. Мудрость всегда была ключевой ценностью Армении, которая помогла армянам сохранить идентичность, культуру, независимость и пронести их через века. Возвращение к этому подходу — одна из основных задач нашего фонда. Армения должна стать домом для мудрецов, который невозможно разрушить. Мы ищем путь к такой Армении: размышляем о том, что мы, как люди страны мудрости, можем предложить миру; что есть у нас, чего нет больше ни у кого.",
        "Мы считаем, что Армения может стать территорией мудрости — местом, где объединяются умы и рождаются смыслы. ",
        "Мы верим, что развитие науки, образования и культуры помогут в создании онтологической безопасности Армении и армянского народа.",
      ],
    },
    {
      id: 5,
      name: "сетевое государство",
      desc: [
        "Мы считаем, что мудрость лежит в основе существования армянского народа. Мудрость всегда была ключевой ценностью Армении, которая помогла армянам сохранить идентичность, культуру, независимость и пронести их через века. Возвращение к этому подходу — одна из основных задач нашего фонда. Армения должна стать домом для мудрецов, который невозможно разрушить. Мы ищем путь к такой Армении: размышляем о том, что мы, как люди страны мудрости, можем предложить миру; что есть у нас, чего нет больше ни у кого.",
        "Мы считаем, что Армения может стать территорией мудрости — местом, где объединяются умы и рождаются смыслы. ",
        "Мы верим, что развитие науки, образования и культуры помогут в создании онтологической безопасности Армении и армянского народа.",
      ],
    },
  ];
  const [activeItem, setActiveItem] = useState(infos[0]);
  const windowSize = useWindowSize();

  return (
    <div className="aboutContainer">
      <div className="aboutInner">
        <div className="btns" style={{ flexDirection: "column" }}>
          {infos.map((info) => (
            <div key={info.id} onClick={() => setActiveItem(info)}>
              <Button
                active={info.id === activeItem.id}
                text={info.name}
                style={btnStyle}
                link={true}
                to=""
                onClick={(e) => e.preventDefault()}
              />
            </div>
          ))}
        </div>
        {windowSize.width < 1100 && (
          <DropDown
            items={infos}
            setItem={setActiveItem}
            type="item"
            text={activeItem.name}
            itemsStyle={{ top: "50%", zIndex: 1, paddingTop: "40px" }}
            className="homePageHeader"
          />
        )}
        <div className="aboutContent">
          {activeItem.desc.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hypotheses;