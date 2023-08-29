import { NavLink, To } from "react-router-dom";
import "./index.css";
interface ButtonProps {
  text: string;
  style?: Object;
  active?: boolean;
  link: boolean;
  to: To;
  icon?: string;
  onClick?: (arg: any) => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({
  text,
  style,
  active,
  link,
  to,
  icon,
  onClick,
  disabled,
  className,
  type,
}) => {
  return (
    <>
      {link ? (
        <NavLink
          onClick={onClick}
          to={to}
          className={`${active && "activeBtn"} ${className} btn`}
          style={style}
        >
          {text}
        </NavLink>
      ) : (
        <button
          disabled={disabled}
          onClick={onClick}
          className={`${active && "activeBtn"} ${className} btn`}
          style={style}
          type={type}
        >
          {text}
          {icon && <img className="btn_icon" src={icon} alt="Icon" />}
        </button>
      )}
    </>
  );
};

export default Button;
