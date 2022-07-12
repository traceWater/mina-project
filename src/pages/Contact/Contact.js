import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div>
        <span id="contactHeroTitle">Contact us</span>
        <div>
          <img
            id="contactHeroImage"
            src={
              process.env.PUBLIC_URL + "/AboutImages/kk-AVLnvEyZ8ehlnGNB.avif"
            }
            alt="HeroImage"
          />
        </div>
      </div>

      <div className="contactWrapper">
        <section className="contactHqLeftSide">
          <span id="contactHqTitle">Headquarters</span>
          <div id="contactHqText">
            The Mina Studio
            <br /> 8241 Us 41, <br /> Monteagle, <br />
            TN, 37356
          </div>
          <br />
          <span id="contactCollaborationsTitle">Collaborations</span>
          <br />
          <p id="contactCollaborationsText">
            <br />
            Reach out to collaborate at <br />
            collab@mina.com
          </p>
        </section>
        {/* ///////////////// Begin Form (Right) Side ////////////////////////// */}
        <section className="contactFormRightSide">
          <span id="contactFormTitle">Inquiries</span>

          <section className="contactFormGroup">
            <form Name="contactForm" method="post">
              <div id="formItem">
                <label id="contactLabel" htmlFor="name">
                  Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="   Your name"
                  // onfocus="placeholder = 'not working'"
                  // onblur="this.placeholder = 'name Not working'"
                />
              </div>

              <div id="formItem">
                <label id="contactLabel" htmlFor="last">
                  Last Name
                </label>
                <input type="text" required placeholder="   Your last name" />
              </div>

              <div id="formItem">
                <label id="contactLabel" htmlFor="email">
                  Your email*
                </label>
                <input
                  type="email"
                  required
                  placeholder="   Your email address"
                />
              </div>

              <div id="formItem">
                <label id="contactMessageLabel" htmlFor="message">
                  Message*
                </label>
                <textarea
                  id="contactMessageInput"
                  name="message"
                  required
                  rows="5"
                  cols="33"
                  placeholder="  Enter your message"
                ></textarea>
              </div>

              <div id="contactButton">
                <button id="contactButtonInput">Submit</button>
              </div>
            </form>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Contact;
