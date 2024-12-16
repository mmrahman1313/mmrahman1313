import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Graphic Design",
      desc: "Enhance your brand with custom graphic design! I create eye-catching logos, marketing materials, and visuals that effectively communicate your message. Let’s craft designs that leave a lasting impression!",
      icon: "fas fa-palette",
    },
    {
      name: "UI/UX Design",
      desc: "Transform your mobile and website experience with intuitive UI/UX design! I craft user-friendly, visually engaging designs that enhance usability and captivate your audience. Let’s create a seamless digital journey together!",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Brand Identity Design",
      desc: "Build a memorable and cohesive brand identity that stands out. We specialize in designing logos and brand elements that truly reflect your company’s values and mission, making your business unforgettable.",
      icon: "fa-solid fa-briefcase",
    },
    {
      name: "Visual Design",
      desc: "Elevate your brand with stunning visual design! I create impactful visuals, from illustrations to layouts, ensuring your message stands out and connects with your audience. Let’s bring your vision to life!",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Digital Content",
      desc: "Digital content includes visuals, videos, and online materials that engage your audience and boost your brand. I create tailored, high-quality digital content to elevate your online presence effectively",
      icon: "fa-solid fa-photo-film ",
    },
    {
      name: "Wizardd IT",
      desc: "Need Service and complete project solutions? Contact Wizardd IT for end-to-end services that bring your vision to life. Visit wizarddit.com and let's create something exceptional together!",
      icon: "fa-solid fa-hat-wizard",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
