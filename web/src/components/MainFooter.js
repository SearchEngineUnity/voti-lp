/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: black;
  color: white;
  font-size: 1rem;
  padding: 80px 0 20px;
  font-weight: 200;
  width: 100%;

  media (max-width: 991px) {
    width: 100%;
    float: left;
    padding: 70px 0;
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  margin-left: 6rem;
`;

const Spacer = styled.div`
  justify-content: space-between !important;
`;

function MainFooter() {
  return (
    <Footer id="footer" className="c-footer c-footer--dark">
      <Spacer id="footer-contain" className="container d-flex justify-content-between">
        <div className="c-footer__brand">
          <a href="https://votidetection.com">
            <img
              src="https://votidetection.com/wp-content/uploads/2020/04/logo-white-1.png"
              alt="Voti Detection Main Logo"
            />
          </a>
        </div>
        <div className="c-footer__nav flex-grow-1">
          <div id="footer-menu" className="d-flex justify-content-around px-5">
            <div>
              <h3 className="text-uppercase">
                <a href="https://votidetection.com/products/">PRODUCTS</a>
              </h3>
              <ul className="list-unstyled" />
            </div>
            <div>
              <h3 className="text-uppercase">
                <a href="https://votidetection.com/technology/">TECHNOLOGY</a>
              </h3>
              <ul className="list-unstyled" />
            </div>
            <div>
              <h3 className="text-uppercase">
                <a href="https://votidetection.com/service-support/">SERVICE &amp; SUPPORT</a>
              </h3>
              <ul className="list-unstyled" />
            </div>
            <div>
              <h3 className="text-uppercase">
                <a href="https://votidetection.com/media/">MEDIA</a>
              </h3>
              <ul className="list-unstyled" />
            </div>
          </div>
        </div>
        <div id="footer-contact" className="c-footer__info">
          <div>
            <h3 className="text-uppercase">phone</h3>
            <ul className="list-unstyled">
              <li>
                Canada: <a href="tel:+1 514 782 1566">+1 514 782 1566</a>
              </li>
              <li>
                UAE: <a href="tel:+971 4 884 2585">+971 4 884 2585</a>
              </li>
              <li>
                USA: <a href="tel:+1 844 285 1566">+1 844 285 1566</a>
              </li>
              <li>
                Malaysia: <a href="tel:+971-4-884-2585">+971-4-884-2585</a>
              </li>
              <li>
                Support: <a href="tel:+1 (844) 413-9909">+1 (844) 413-9909</a>
              </li>
            </ul>
          </div>
          <div id="ligne">
            <hr className="c-separator c-separator--dark c-separator--thin c-separator--left" />
          </div>
          <div>
            <h3 className="text-uppercase">Email</h3>
            <ul className="list-unstyled">
              <li className="c-footer__email">
                <a href="mailto:sales@votidetection.com">sales@votidetection.com</a>
              </li>
            </ul>
          </div>
          <div id="ligne">
            <hr className="c-separator c-separator--dark c-separator--thin c-separator--left" />
          </div>

          <div className="ml-auto mt-5">
            <ul className="list-unstyled d-flex">
              <li className="social-item">
                <a target="_blank" href="https://fr-fr.facebook.com/pg/VOTIDetection">
                  <i aria-hidden="true" className="fa fa-facebook" />
                </a>
              </li>
              <li className="social-item ml-5">
                <a href="https://twitter.com/votidetection" target="_blank">
                  <i aria-hidden="true" className="fa fa-twitter" />
                </a>
              </li>
              <li className="social-item ml-5">
                <a href="https://www.linkedin.com/company/votidetection" target="_blank">
                  <i aria-hidden="true" className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Spacer>
      <div className="copy-txt">
        <Copyright>
          <p className="copyright-txt">
            © 2020 VOTI Detection Inc. - All rights reserved -{' '}
            <a href="https://votidetection.com/terms-and-conditions/">Terms and conditions</a> -{' '}
            <a href="https://votidetection.com/privacy-policy/">Privacy policy</a>
          </p>
        </Copyright>
      </div>
    </Footer>
  );
}
export default MainFooter;
