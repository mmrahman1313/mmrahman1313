import React from "react";
import Typewriter from "typewriter-effect";
import videobg from "../videos/home.mp4";

const Home = ({ classicHeader, darkTheme, handleNavClick }) => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark" />

        {/* ---------------image background------------------ */}
        <div
          className="hero-bg parallax"
          style={{ backgroundImage: 'url("images/intro-bg.jpg")' }}
        ></div>

        {/* -------------------video background---------------------- */}

        <div className="player hero-bg parallax">
          <video
            src={videobg}
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          ></video>
        </div>

        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <span className="bg-primary rounded-pill m-4   mb-lg-1 d-inline-block d-lg-none">
                  <img
                    className="img-fluid rounded-pill d-block"
                    src="/Masum/mm.png"
                    title="I'm Mashiur Rahman"
                    alt="profile"
                    style={{ width: "180px", height: "180px" }}
                  />
                </span>
                <h2 className="text-14 fw-600 text-white mb-2 mb-md-3">
                  <Typewriter
                    options={{
                      strings: [
                        "I’m Md. Mashiur Rahman ",
                        "I’m a Graphic Design Expert, ",
                        "I’m a UI/UX Specialist, ",
                        "I’m a Master of Branding,",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <p className="text-7 w-2  text-light mb-4">
                  <div className="md:d-flex  justify-content-center align-items-center align-self-center">
                    {/* <Typewriter
                      options={{
                        strings: [
                          "I’m a Graphic Design Expert, ",
                          "I’m a UI/UX Specialist, ",
                          "I’m a master of branding,",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    /> */}
                    <h4 className="fw-350 text-3 text-light">
                      Creating stunning visuals and <br /> user-friendly designs
                      to elevate brands effectively.
                    </h4>
                    {/* <h4 className="text-6 w-2 mt-2 ml-2 text-light">
                      I’m a Graphic and UI/UX Design Specialist, <br />{" "}
                      delivering creative solutions through stunning visuals,{" "}
                      <br />
                      seamless user experiences, and impactful designs <br />
                      that elevate brands and engage audiences effectively.
                    </h4> */}
                  </div>
                  {/* <h4 className="text-6 w-2 text-light">
                    through stunning visuals and impactful designs.
                  </h4>
                  */}
                </p>
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-4"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
