
const WorkingProcess = ({ classicHeader, darkTheme }) => {
    const services = [
        {
          name: "Define the Purpose and Audience",
          desc: "Understand the goals of the website or app and the target audience. This helps in shaping the features, design, and user experience.",
          icon: "fas fa-bullseye", 
        },
        {
          name: "Conceptualization",
          desc: "Brainstorm the features, layout, and user flow of the website or app. Initial wireframes and design ideas are created during this phase.",
          icon: "fas fa-lightbulb", 
        },
        {
          name: "UI/UX Design",
          desc: "Design the interface for the website or app, ensuring a user-friendly experience. This step focuses on design aesthetics and user flow.",
          icon: "fas fa-pencil-ruler",
        },
        {
          name: "Visual Design and Branding",
          desc: "We create high-quality visual assets, including logos, graphics, and other brand elements, ensuring consistency across all design elements. We aim to create a cohesive visual identity for your brand",
          icon: "fa-sharp fa-regular fa-object-group", 
        },
        {
          name: "Quality Assurance",
          desc: "Before finalizing the designs, we conduct thorough testing to ensure the user interface works seamlessly across devices. We check for usability, responsiveness, and overall user experience",
          icon: "fas fa-check-circle", 
        },
        {
          name: "Project Handover",
          desc: "Provide finalized design files, prototypes, and guidelines with full documentation. Offer support for implementation and maintenance, ensuring seamless integration and consistent design quality for long-term success.",
          icon: "fas fa-handshake", 
        },
      ];
      
      return (
        
        <section
          id="WorkingProcess"
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
                Working
              </h2>
              <p
                className={
                  "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                  (darkTheme ? "text-white" : "text-dark")
                }
              >
                Process
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

export default WorkingProcess;