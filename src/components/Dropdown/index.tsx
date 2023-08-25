import { useState, useEffect, useRef } from "react";
import ARROW from "../../assets/info/dropdown-arrow.svg";
import Button from "../Button";
import "./index.css";
import { useParams } from "react-router";

interface Props {
  items: any;
  setItem: any;
  type: string;
  text: string;
  style?: Object;
  itemsStyle?: Object;
  className?: string;
}

const DropDown: React.FC<Props> = ({
  items,
  setItem,
  text,
  type,
  style,
  itemsStyle,
  className,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { lang } = useParams();
  // console.log(items)
  return (
    <div className={`${className} dropdown`} style={style} ref={dropdownRef}>
      <Button
        onClick={() => setOpenDropdown(!openDropdown)}
        text={text}
        link={false}
        to={""}
        icon={ARROW}
        style={{
          background: "#DD264E",
          color: "#fff",
          gap: "20px",
          padding: "20px 30px",
        }}
        className={
          className?.includes("homePageHeader") ? "homePage_btn" : undefined
        }
      />
      {openDropdown && (
        <div className="dropdownItems" style={itemsStyle}>
          {items.map((item: any, i: number) => (
            <button
              key={i}
              onClick={() => {
                if (type === "i") {
                  setItem(i, item[`name_${lang || "ru"}`]);
                } else if (type === "type") {
                  setItem(item.type);
                } else {
                  console.log(item);
                  setItem((prev: any) => ({
                    ...prev,
                    data: item,
                  }));
                }
                setOpenDropdown(false);
              }}
            >
              {item[`name_${lang || "ru"}`]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
