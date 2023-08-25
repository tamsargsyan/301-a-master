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
  lang: string;
}

const Hypotheses: React.FC<HypothesesProps> = ({ dataHypotheses, lang }) => {
  const [activeItem, setActiveItem] = useState({
    data: dataHypotheses[0],
    id: 1,
  });
  // console.log(activeItem)
  const windowSize = useWindowSize();
  // console.log(dataHypotheses);
  return (
    <div className="aboutContainer">
      <div className="aboutInner">
        <div className="btns" style={{ flexDirection: "column" }}>
          {dataHypotheses.map((data: any, i: number) => (
            <div
              key={i}
              onClick={() =>
                setActiveItem((prev) => ({
                  ...prev,
                  data,
                  id: i + 1,
                }))
              }
            >
              <Button
                active={i + 1 === activeItem.id}
                text={data[`name_${lang || "ru"}`]}
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
            items={dataHypotheses}
            setItem={setActiveItem}
            type="item"
            text={activeItem.data[`name_${lang || "ru"}`]}
            itemsStyle={{ top: "50%", zIndex: 1, paddingTop: "40px" }}
            className="homePageHeader"
          />
        )}
        <div
          className="aboutContent"
          dangerouslySetInnerHTML={{
            //@ts-ignore
            __html: activeItem.data[`description_${lang}`],
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hypotheses;
