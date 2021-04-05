import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer__base"></div>

      <footer className="footer section_margin">
        <div className="footer__container d-flex flex-row justify-content-between">
          <p className="footer__copywrite d-flex align-items-center">
            &copy; 2021 Elena Vorobeva
          </p>
          <ul className="footer__social-media d-flex section_ul align-items-center">
            <li className="footer__social-media-element footer__social-media-element_insta">
              insta
            </li>
            <li className="footer__social-media-element footer__social-media-element_twitter">
              twitter
            </li>
            <li className="footer__social-media-element footer__social-media-element_facebook">
              facebook
            </li>
            <li className="footer__social-media-element footer__social-media-element_vk">
              vk
            </li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
