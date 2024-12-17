import React from "react";

const AboutUs = ({ classicHeader, darkTheme }) => {
  // Function to calculate age
  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-light opacity-1" : "text-muted opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-6 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Md. Mashiur Rahman,</span> a
              passionate Graphic Designer, UI/UX Designer, and Branding Expert
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              with over 4 years of experience. Based in Bangladesh, I specialize
              in transforming creative concepts into visually captivating
              digital experiences that help brands stand out.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              Throughout my career, I’ve had the privilege of working with
              various clients across multiple industries, helping them create
              impactful, user-centric designs. I’ve collaborated with both small
              businesses and large corporations, delivering tailored solutions
              that align with their goals and elevate their digital presence.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              As the CEO of Wizardd IT, I’m also involved in leading a team that
              offers a range of IT services, including design, development, and
              digital strategy. My expertise lies in creating intuitive user
              interfaces, innovative graphic designs, and memorable brand
              identities that leave a lasting impression.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              I believe design goes beyond aesthetics—it’s about creating a
              seamless experience that engages users and drives results. With a
              strong foundation in Computer Science and Engineering, I approach
              each project with a technical mindset, ensuring designs are not
              only beautiful but also functional.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              I’m always looking for new challenges and opportunities to push
              the boundaries of design. Let’s work together to bring your ideas
              to life and elevate your brand!
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 d-flex justify-content-center align-items-center w col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Md. Mashiur Rahman
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:chat@simone.com">
                    mmrahman1313.mmr@gamil.com
                  </a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>
                  {calculateAge("2000-04-16")}
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Narayanganj- 1450,
                  Dhaka, Bangladesh.
                </li>
              </ul>
              <a
                href={
                  "https://drive.google.com/file/d/1XQxvbeYB6jZ_hdVp2yTw3SvueWBKRWmE/view?usp=sharing"
                }
                target="_blank"
                download
                className="btn btn-primary rounded-pill"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>4</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experiance
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>65</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>220</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Projects Done
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>8</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Get Awards
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
