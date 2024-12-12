/* eslint-disable react/style-prop-object */
import React from "react";
import Slider from "react-slick";

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    // Graphic Design Feedback

    {
      name: "Sinso Technology",
      position: "Creative Director",
      src: "ClientFeedback/Sinso Technology.png",
      desc: "The user interface is intuitive and easy to navigate. The design completely transformed the user experience. We're thrilled with the results!",
      rating: 5,
    },
    {
      name: "El Crazy",
      position: "User from UK",
      src: "ClientFeedback/El Crazy.jpg",
      desc: "Incredible work on the redesign of our website. The UI is sleek, and the user journey is seamless. You've made navigating our platform easier than ever. Thank you for such an outstanding design!",
      rating: 5,
    },
    {
      name: "Joe Batchelor",
      position: "CEO, Tech Solutions",
      src: "ClientFeedback/Joe Batchelor .png",
      desc: "Amazing work on the marketing materials! The graphics were eye-catching and perfectly aligned with our brand. Thank you for your attention to detail and excellent execution!",
      rating: 5,
    },


    {
      name: "Leon Knight",
      position: "Business Owner, USA",
      src: "ClientFeedback/Leon Knight.jpg",
      desc: "Incredible work on the redesign of our website. The UI is sleek, and the user journey is seamless. You've made navigating our platform easier than ever. Thank you for such an outstanding design!",
      rating: 5,
    },
    {
      name: "KInkela",
      position: "Marketing Specialist",
      src: "ClientFeedback/KInkela .jpg",
      desc: "Your digital content creation has truly elevated our marketing efforts. The videos are engaging, and the visuals have made a big difference in our overall strategy!",
      rating: 5,
    },
    {
      name: "Lymani Mehdi Oussama",
      position: "Content Manager",
      src: "ClientFeedback/Lymani Mehdi Oussama.png",
      desc: " Thanks to your branding work, our company now has a clear, recognizable identity. The logo and brand assets reflect our values perfectly. Excellent work!",
      rating: 5,
    },
    {
      name: "Devid Joap",
      position: "User from UAE",
      src: "ClientFeedback/Devid Joap.jpg",
      desc: "The designs were truly remarkable. They understood our vision and delivered stunning graphics that brought our ideas to life. Professional, creative, and timely. Highly recommend!",
      rating: 5,
    },
    {
      name: "Rajshejhar Gupta",
      position: "Brand Strategist",
      src: "ClientFeedback/Rajshejhar Gupta.jpg",
      desc: " You made our website not only visually appealing but also incredibly user-friendly. Our clients love it! A fantastic job on UI/UX design.",
      rating: 5,
    }

  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section
      id="testimonial"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24 text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-light opacity-1" : "text-muted opacity-4")
            }
          >
            Testimonial
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Client Speak
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading End */}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    "rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      style={{ width: "72px", height: "72px" }}
                      className="img-fluid rounded-circle border d-inline-block"
                      src={value.src}
                      alt="Profile"
                    />
                    <p className="ms-3 mb-0">
                      <strong
                        className={
                          "d-block fw-600 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        {value.name}
                      </strong>
                      <span className="text-muted fw-500">
                        {value.position}
                      </span>
                    </p>
                  </div>
                  <p
                    className={
                      "fw-500 mb-4 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.desc}”
                  </p>
                  <span className="text-2">
                    {[...Array(value.rating)].map((_, i) => (
                      <i className="fas fa-star text-warning" key={i} />
                    ))}
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
