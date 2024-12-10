import React from "react";

const Disclaimer = ({ darkTheme }) => {
  return (
    <div
      id="disclaimer"
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
              Copyright &amp; Disclaimer
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p className=" text-6">Copyright:</p>

            <ul className="lh-lg">
              <li>
                All content on this website (text, images, designs, and other
                materials) is the intellectual property of Md. Mashiur Rahman.
              </li>
              <li>
                Unauthorized use or reproduction of any content is strictly
                prohibited.
              </li>
            </ul>

            <p className=" text-6">Disclaimer:</p>

            <ul className="lh-lg">
              <li>
                Md. Mashiur Rahman makes every effort to ensure the accuracy and
                reliability of the website's information.
              </li>
              <li>
                We are not responsible for any errors, omissions, or damages
                arising from the use of the content on this website.
              </li>
              <li>
                All services provided are subject to availability and can be
                modified or changed at any time without prior notice.
              </li>
            </ul>
            <p className=" text-6">Contact:</p>

            <ul className="lh-lg">
              <li>
                For any inquiries or clarifications, please reach out to Md.
                Mashiur Rahman.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
