import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import girl_img from "../Images/girl_img.jpg";
import image from "../Images/image.jpg";
import flight from "../Images/flight.jpg";
import icon from "../Images/icon.png";
import "../Styles/FirstPage.css";
const FirstPage = () => {
  let navigate = useNavigate();
  function secondpage() {
    navigate("/secondpage");
  }

  return (
    <div className="firstpage">
      <div className="Navbar">
        <img src={logo} alt="" />
        <button onClick={secondpage} id="a">
          Get Projects
        </button>
        <button id="b">Onboard Talent</button>
      </div>
      <div className="homepage1">
        <h3>success stories</h3>
        <h1>
          Every success journey <br />
          we've encountered.
        </h1>
      </div>
      <div className="homepage2">
        <div className="left">
          <img src={girl_img} alt="" />
        </div>
        <div className="right">
          <h2>
            Enhance fortune 50
            <br /> company's insights
            <br /> teams research
            <br /> capabilities
          </h2>
          <button>Explore More → </button>
        </div>
      </div>
      <div className="box1">
        <img with="50px" height="50px" src={image} alt="" />
        <h4>
          Achieved reduction in <br />
          project execution time
          <br /> by optimising team <br />
          availability
        </h4>
      </div>
      <div className="box2">
        <div className="img1">
          <img width="50px" height="50px" src={flight} alt="" />
        </div>
        <div className="content">
          <h3 id="t1">10 DAYS</h3>
          <h4 id="t2">Staff Deployment</h4>
        </div>
      </div>
      <div className="box3">
        <div className="head1">
          <div className="first">
            <h1>$0.5</h1>
          </div>
          <div className="second">
            <h3>MILLION</h3>
          </div>
        </div>
        <div className="head2">
          <h4>
            Reduced client expenses <br /> by saving on hiring and
            <br /> employee costs.
          </h4>
        </div>
      </div>
      <div className="homepage3">
        <div className="text">
          <h3>What's on your mind</h3>
          <h1>Ask Questions</h1>
        </div>
        <div className="para">
          <div className="ques1">
            <div className="q1">
              <h3>Do you offer freelancers?</h3>
            </div>
            <div className="sym1">
              <h3>+</h3>
            </div>
          </div>
          <hr />
          <div className="ques2">
            <div className="q2">
              <h3>
                what's the guarantee that I will be statisfied <br />
                with the hired talent?
              </h3>
            </div>
            <div className="sym2">
              <h3>+</h3>
            </div>
          </div>
          <hr />
          <div className="ques3">
            <div className="q3">
              <h3>Can I Hire multiple talents at once?</h3>
              <p>
                If unhappy with a project,communicate with the freelancer,allow
                for revisions,and
                <br />
                refer to the agreement. Escalate to paltform support if
                needed,considering <br />
                mediation.Review policies, seek collaborative solutions for
                resolution.
              </p>
            </div>
            <div className="sym3">
              <h3>-</h3>
            </div>
          </div>
          <hr />
          <div className="ques4">
            <div className="q4">
              <h3>Why should I not go to an agency directly?</h3>
            </div>
            <div className="sym4">
              <h3>+</h3>
            </div>
          </div>
          <hr />
          <div className="ques5">
            <div className="q5">
              <h3>
                Who can help me pick a right skillset
                <br />
                and duration for me?
              </h3>
            </div>
            <div className="sym5">
              <h3>+</h3>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="homepage4">
        <div className="side1">
          <div className="icon">
            <img width="20px" height="20px" src={icon} alt="" />
          </div>
          <div className="sec1">
            <h4>Talup 2023.All rights reserved</h4>
          </div>
        </div>
        <div className="side2">
          <div className="s1">
            <a href=" ">Terms & Conditions</a>
          </div>
          <div className="s2">
            <a href=" ">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstPage;
