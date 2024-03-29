import React from "react";
import styles from "./home.module.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    return (
      <div>
        {this.state.width > 768 ? (
          <></>
        ) : (
          <>
            <div className="display-3 my-5 text-center">
              {/* <img src='/dummy-profile-pic.jpg' className='img-fluid rounded-circle' style={{width:'220px',border:'15px solid #360909'}} alt='img'/> */}
              <img
                src="/profpic.jpg"
                className="img-fluid rounded-circle"
                style={{ width: "220px", border: "15px solid #360909" }}
                alt="img"
              />
            </div>
          </>
        )}

        <div className="m-5 text-center">
          <div
            className="display-4 pt-5 pt-3"
            style={{ fontFamily: "Righteous", color: "#bf4c24" }}
          >
            MANISH SHARMA
          </div>
          <div className="h3 my-2" style={{ fontFamily: "Acme" }}>
            Front End Developer
          </div>
          <div className={`my-4 col-sm-8 mx-auto ${styles.description}`}>
            A hardworking, motivated and proactive individual striving for
            continous improvement. Currently working as a software developer
            specializing in web development and Working on the Geneo web
            Application at Nextsteps.ai. I like to use my technical, analytical
            and problem-solving skills to create dynamic, high-speed, responsive
            web apps and platforms{" "}
          </div>
          <div className="d-flex justify-content-center py-4 row">
            <div className="mx-3 sm-col-6 col-12">
              <i className="material-icons"> place </i>
              <p>Delhi/Bengaluru</p>
            </div>
            {/* <div className="mx-3 row"> */}
            {/* <i className="material-icons"> phone </i> */}
            {/* <i class="material-icons">contact_mail</i> */}
            {/* <p>Contact Mail</p> */}
            {/* </div> */}
            <div className="mx-3 sm-col-6 col-12">
              <i className="material-icons"> email </i>
              <p>Contact e-mail :</p>
              <b>
                <a
                  href="mailto:email@manish-sharma.in?subject=Ref-Portfolio&body=Hi Manish,"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  email@manish-sharma.in
                </a>
              </b>
            </div>
          </div>
          <div
            className={`${styles.links} links d-flex justify-content-center py-2 row`}
          >
            <a
              href="https://www.linkedin.com/in/manish203"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className="mx-4 row">
                <img src="/ln.png" style={{ width: "50px" }} alt="img" />
                <p className="my-auto text-dark">LinkedIn</p>
              </div>
            </a>
            <a
              href="https://github.com/Manishsharma203"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className="mx-4 row">
                <img src="/github.png" style={{ width: "50px" }} alt="img" />
                <p className="my-auto text-dark">Github</p>
              </div>
            </a>
            <a
              href="https://www.hackerrank.com/Manish016"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className="mx-4 row">
                <img
                  src="/Hackerrank.png"
                  style={{ width: "50px" }}
                  alt="img"
                />
                <p className="my-auto text-dark">Hackerrank</p>
              </div>
            </a>
          </div>
          <div className="mx-auto pt-4">
            <a
              href="https://drive.google.com/file/d/1nQFU9y4gpD6gwhyZDc-eGfy0KPDAbNfl/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn btn-info">Download CV</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
