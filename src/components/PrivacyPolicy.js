import React from "react";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="mainPage">
      <div className="privacyParallax">
        <div className="privacy-container">
          {/* Privacy Policy Header */}
          <div className="privacy-header">
            <h1 className="privacy-title">Privacy Policy & Terms of Service</h1>
            <p className="privacy-subtitle">Last Updated: March 22, 2025</p>
          </div>

          {/* Privacy Policy Content */}
          <div className="privacy-content">
            {/* Introduction Section */}
            <section className="policy-section">
              <h2>1. Introduction</h2>
              <p>
                These terms and conditions outline the rules and regulations for the
                Sankalan web portal. By accessing this website, we assume you accept these
                terms and conditions. Do not continue to Sankalan if you do not agree to
                take all of the terms and conditions stated on this page.
              </p>
            </section>

            {/* Privacy Policy Section */}
            <section className="policy-section">
              <h2>2. Privacy Policy</h2>
              <p>
                This page informs website visitors about our policies regarding the
                collection, use, and disclosure of Personal Information if anyone decides
                to use our Service. If you choose to use our Service, you agree to the
                collection and use of information with this policy. We use this personal
                information to provide and improve our services. We will not use or share
                your information with anyone except as described in this Privacy Policy.
              </p>
            </section>

            {/* Information Collection and Use */}
            <section className="policy-section">
              <h2>3. Information Collection and Use</h2>
              <p>
                For a better experience, we may require some of your personal information,
                including but not limited to your name, phone number, email, and
                organization you work with. We will only use the collected data to contact
                or identify you.
              </p>
            </section>

            {/* Log Data */}
            <section className="policy-section">
              <h2>4. Log Data</h2>
              <p>
                Whenever you visit our Service, we collect information that your browser
                sends to us, known as Log Data. This log data may include your I.P.
                address, browser version, pages visited, time and date of your visit, and
                other statistics. We also use Google Analytics and Amazon Cloudwatch to
                monitor user behavior.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section className="policy-section">
              <h2>5. Cookies and Tracking Technologies</h2>
              <p>
                Our website uses cookies as a unique anonymous identifier to improve our
                Service. You have the option to either accept or refuse these cookies. If
                you choose to refuse our cookies, you may not be able to use some portions
                of our Service.
              </p>
            </section>

            {/* Service Providers */}
            <section className="policy-section">
              <h2>6. Service Providers</h2>
              <p>
                We may employ third-party companies and individuals to facilitate our
                Service, provide the Service on our behalf, perform Service-related
                services, or assist us in analyzing how our Service is used. These
                third-party partners have access to your Personal Information only to
                perform assigned tasks on our behalf.
              </p>
            </section>

            {/* Security */}
            <section className="policy-section">
              <h2>7. Security</h2>
              <p>
                We value your trust in providing us with your Personal Information. Thus,
                we strive to use commercially acceptable means of protecting it. However,
                no method of transmission over the internet or electronic storage is 100%
                secure.
              </p>
            </section>

            {/* Links to Other Sites */}
            <section className="policy-section">
              <h2>8. Links to Other Sites</h2>
              <p>
                Our Service may contain links to other sites. If you click on a
                third-party link, you will get directed to that site. We are not
                responsible for the content, privacy policies, or practices of any
                third-party sites or services.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="policy-section">
              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. Thus, we advise you to
                review this page periodically for any changes. These changes are effective
                immediately after they get posted on this page.
              </p>
            </section>

            {/* Terms of Use */}
            <section className="policy-section">
              <h2>10. Terms of Use for Website</h2>
              <p>
                By using our website (*.ducs.in), you agree to the privacy policy and the
                following terms:
              </p>
              <ul>
                <li>We try our best to protect your private information.</li>
                <li>
                  Your name and content you create can be used for promotional purposes.
                </li>
                <li>
                  You must not misuse or exploit any vulnerabilities in the website.
                </li>
                <li>
                  You are free to review the source code available at:
                  <br />
                  <a
                    href="https://github.com/dhruvbhardwaj14/SankalanWebsite/tree/frontend_team"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sankalan Website 
                  </a>
                </li>
              </ul>
            </section>

            {/* Terms of Service for Sankalan */}
            <section className="policy-section">
              <h2>11. Terms of Service for Sankalan</h2>
              <p>
                By registering for Sankalan through our website or registration desk, you
                agree to the following terms:
              </p>
              <ul>
                <li>
                  You must not misuse technology to cause damage to Sankalan.
                </li>
                <li>You must follow the guidelines provided during the event.</li>
                <li>You will respect the organizers and other participants.</li>
                <li>
                  Violation of terms can result in disqualification and potential future
                  bans.
                </li>
              </ul>
            </section>

            {/* Non-discrimination Policy */}
            <section className="policy-section">
              <h2>12. Non-discrimination Policy</h2>
              <p>
                Sankalan prohibits discrimination, harassment, and bullying against any
                person based on age, gender, race, nationality, disability, and other
                protected characteristics.
              </p>
            </section>

            {/* Event Conduct and Safety */}
            <section className="policy-section">
              <h2>13. Event Conduct and Safety</h2>
              <p>
                Sankalan is committed to providing a safe, productive, and welcoming
                environment to all participants. Participants are expected to adhere to
                these principles and respect the rights of others. Violations may result
                in disqualification.
              </p>
            </section>

            {/* Contact Us */}
            <section className="policy-section">
              <h2>14. Contact Us</h2>
              <p>
                If you have any questions about these policies, please contact us at:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@ducss.tech">support@ducss.tech</a>
              </p>
              <p>
                <strong>Address:</strong> Department of Computer Science, University of
                Delhi, Delhi, India
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
