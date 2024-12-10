import React from "react";

const TermsAndConditions = ({ darkTheme }) => {
  return (
    <div
      id="terms-policy"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className="modal-header">
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Terms &amp; Policy
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p>
              I, Md. Mashiur Rahman, provide my design and development services
              with the highest standards of quality and complete
              professionalism. I am committed to delivering personalized
              services tailored to your needs, ensuring your utmost
              satisfaction.
            </p>
            <h3 className={"mb-3 mt-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Terms of Use
            </h3>
            <p>
              By availing of my services, clients agree to provide accurate
              project details, feedback, and approvals in a timely manner. I
              assure that high-quality output will be delivered on time, and I
              am always ready to make any revisions or adjustments as required.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Part I – Information I Collect and Handle
            </h5>
            <p>
              I collect essential project details such as brand elements, design
              preferences, and functional requirements to create customized
              solutions for you. All your information and materials remain
              confidential and will only be used for the completion of the
              project.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Part II – Information I Process on Your Behalf
            </h5>
            <p>
              The information you provide is used to create bespoke visuals,
              functional UI/UX designs, or other digital solutions. I handle all
              proprietary content with care to ensure the integrity of your
              brand.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Part III – General Policy
            </h5>
            <p>
              My goal is to deliver outstanding designs and solutions that
              enhance your brand. I work with you throughout the project
              lifecycle, ensuring collaboration, confidentiality, and a seamless
              experience.
            </p>
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              Privacy Policy
            </h3>
            <p>
              I respect your privacy and handle all project details, brand
              materials, and personal information with utmost care. Your
              information is never shared with third parties or used for
              anything unrelated to your project.
            </p>
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              Contact
            </h3>

            <p>
              For more details or inquiries, feel free to contact me. I'm here
              to fulfill your design needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
