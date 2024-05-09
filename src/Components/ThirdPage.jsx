import img1 from "../Images/logo.png";
import "../Styles/ThirdPage.css";
import img2 from "../Images/GreenTick.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ThirdPage = () => {
  let navigate = useNavigate();
  const [count, setCount] = useState(5); 
  useEffect(() => {
    const Timer = setInterval(() => {
      if (count <= 1) {
        clearInterval(Timer);
        navigate("/firstpage"); // Navigate to firstpage after countdown over
      } else {
        setCount((prevCount) => prevCount - 1);
      }
    }, 1000);

    return () => clearInterval(Timer);
  }, [count]);
  return (
    <div className="thirdpage">
      <img id="logo" src={img1} alt="" />
      <div className="cnt1">
        <img src={img2} alt="" />
        <p id="sub">Success Submitted</p>
        <h1>Congratulations</h1>
        <p>
          Your request has been successfully submitted to us.We <br /> will
          validate your information and reach out to your <br /> shortly with
          updates{" "}
        </p>
      </div>
      <div className="countdwn">
        <p>Redirecting you to Homepage in </p>
        <h4>{count} Seconds</h4>
      </div>
    </div>
  );
};
export default ThirdPage;
