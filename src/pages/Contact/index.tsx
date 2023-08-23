import { useState } from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import EMAIL from "../../assets/email.svg";
import "./index.css";
import Button from "../../components/Button";
import SIDE_PATTERN_2 from "../../assets/patterns/side-2.svg";
import SIDE_PATTERN_2_MOBILE from "../../assets/patterns/side-2-mobile.svg";
import { useWindowSize } from "../../hooks/useWindowSize";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  // console.log("Form Data:", formData);
  const windowSize = useWindowSize();
  return (
    <>
      <div className="separatedPart"></div>
      <Background
        pattern1={
          windowSize.width < 975 ? SIDE_PATTERN_2_MOBILE : SIDE_PATTERN_2
        }
        shoudHaveSidePattern={false}
        pattern2LeftStyle={{ display: "none" }}
        pattern2RightStyle={{
          width: "190px",
          height: "190px",
          top: "480px",
        }}
        style={{ flexDirection: "column", padding: "0" }}
      >
        <Header
          h1="Напишите нам"
          icon={EMAIL}
          style={{
            paddingTop: "40px",
            paddingBottom: "40px",
            width: "100%",
            paddingLeft: "300px",
            alignItems: "center",
          }}
        />
        <form className="formContainer" onSubmit={handleSubmit}>
          <div className="formInner">
            <div className="formInputs">
              <div className="formGroup">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-hidden={true}
                  className="form"
                />
              </div>
              <div className="formGroup">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Ваша почта"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-hidden={true}
                  className="form"
                />
              </div>
            </div>
            <div className="formGroup">
              <textarea
                id="message"
                name="message"
                placeholder="Написать"
                rows={4}
                cols={80}
                value={formData.message}
                onChange={handleChange}
                className="form"
              />
            </div>
          </div>
          <div className="btns">
            <Button
              text="Send"
              style={{
                padding: "15px 70px",
                background: "#DD264E",
                boxShadow: "-21px 16px 38px 0px rgba(191, 9, 48, 0.21)",
                color: "#fff",
              }}
              link={false}
              to=""
              className="homePage_btn"
            />
          </div>
        </form>
      </Background>
    </>
  );
};

export default Contact;
