/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: black;
  color: white;
  padding: 80px 0 20px;
  font-weight: 200;

  @media (max-width: 991px) {
    width: 100%;
    float: left;
    padding: 70px 0;
  }

  @media (max-width: 600px) {
    padding: 70px 0 0;
  }
`;

const Copyright = styled.div`
  @media (max-width: 1200px) {
    max-width: 94%;
  }
`;

const Spacer = styled.div`
  max-wdith: 1200px;
  @media (max-width: 1200px) {
    max-width: 94%;
  }
  @media (max-width: 991px) {
    display: block !important;
  }
`;

const ContainerFooterNav = styled.div`
  @media (max-width: 991px) {
    width: 70%;
    flex: none;
    float: left;
    flex-grow: unset !important;
    margin-top: 50px;
  }
  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
  }
`;

const ContainerFooterBrand = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin: 0 auto;
    display: table;
    float: none;
    flex: none;
    text-align: center;
  }
`;

const FooterMenu = styled.div`
  @media (max-width: 1180px) {
    padding: 0 20px !important;
  }
  @media (max-width: 991px) {
    display: block !important;
  }
`;

const FooterContact = styled.div`
  @media (max-width: 991px) {
    width: 30%;
    flex: none;
    float: left;
    flex-grow: unset !important;
    margin-top: 50px;
  }
  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
  }
`;

const CopyrightText = styled.p`
  font-size: 14px;
  margin: 20px 0;
`;

const Social = styled.div`
  margin-top: 0 !important;
  @media (max-width: 767px) {
    width: auto;
    margin: 0 auto !important;
    display: table;
  }
`;

const ListItem = styled.li`
  line-height: 30px;
  font-weight: normal;
  font-size: 16px;
`;

const UnorderedList = styled.ul`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const FooterMenuDiv = styled.div`
  @media (max-width: 991px) {
    width: 50%;
    float: left;
    padding-right: 20px;
  }
  @media (max-width: 600px) {
    width: 100%;
    float: left;
    padding-right: 0;
  }
`;

const StyledH3 = styled.h3`
  @media (max-width: 1180px) {
    font-size: 14px;
    line-height: 25px;
  }
`;

const StyledHr = styled.hr`
  background-color: #ccc;
  border: 0;
  height: 1px;
  margin-bottom: 1.5em;
`;

const SocialUnorderedList = styled.ul`
  margin: 0 !important;
  padding-top: 0 !important;
`;

const SocialListItem = styled.li`
  line-height: 30px;
  font-weight: normal;
  border: 1px solid transparent;
  border-radius: 50%;
  height: 38px;
  width: 38px;
  text-align: center;
  vertical-align: middle;
  transition: all 0.15s ease-in-out 0s;
`;

const StyledA = styled.a`
  &:link {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
  }

  &:visited {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
  }

  &:hover {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
  }
`;
function MainFooter() {
  return (
    <Footer id="footer" className="c-footer c-footer--dark">
      <Spacer id="footer-contain" className="container d-flex justify-content-between">
        <ContainerFooterBrand className="c-footer__brand">
          <StyledA href="https://votidetection.com">
            <img
              src="https://votidetection.com/wp-content/uploads/2020/04/logo-white-1.png"
              alt="Voti Detection Main Logo"
            />
          </StyledA>
        </ContainerFooterBrand>
        <ContainerFooterNav className="flex-grow-1">
          <FooterMenu id="footer-menu" className="d-flex justify-content-around px-5">
            <FooterMenuDiv>
              <StyledH3 className="text-uppercase">
                <StyledA href="https://votidetection.com/products/">PRODUCTS</StyledA>
              </StyledH3>
              <UnorderedList className="list-unstyled" />
            </FooterMenuDiv>
            <FooterMenuDiv>
              <StyledH3 className="text-uppercase">
                <StyledA href="https://votidetection.com/technology/">TECHNOLOGY</StyledA>
              </StyledH3>
              <UnorderedList className="list-unstyled" />
            </FooterMenuDiv>
            <FooterMenuDiv>
              <StyledH3 className="text-uppercase">
                <StyledA href="https://votidetection.com/service-support/">
                  SERVICE &amp; SUPPORT
                </StyledA>
              </StyledH3>
              <UnorderedList className="list-unstyled" />
            </FooterMenuDiv>
            <FooterMenuDiv>
              <StyledH3 className="text-uppercase">
                <StyledA href="https://votidetection.com/media/">MEDIA</StyledA>
              </StyledH3>
              <UnorderedList className="list-unstyled" />
            </FooterMenuDiv>
          </FooterMenu>
        </ContainerFooterNav>
        <FooterContact id="footer-contact" className="c-footer__info">
          <div>
            <h3 className="text-uppercase">phone</h3>
            <UnorderedList className="list-unstyled">
              <ListItem>
                Canada: <StyledA href="tel:+1 514 782 1566">+1 514 782 1566</StyledA>
              </ListItem>
              <ListItem>
                UAE: <StyledA href="tel:+971 4 884 2585">+971 4 884 2585</StyledA>
              </ListItem>
              <ListItem>
                USA: <StyledA href="tel:+1 844 285 1566">+1 844 285 1566</StyledA>
              </ListItem>
              <ListItem>
                Malaysia: <StyledA href="tel:+971-4-884-2585">+971-4-884-2585</StyledA>
              </ListItem>
              <ListItem>
                Support: <StyledA href="tel:+1 (844) 413-9909">+1 (844) 413-9909</StyledA>
              </ListItem>
            </UnorderedList>
          </div>
          <div id="ligne">
            <StyledHr className="c-separator c-separator--dark c-separator--thin c-separator--left" />
          </div>
          <div>
            <StyledH3 className="text-uppercase">Email</StyledH3>
            <UnorderedList className="list-unstyled">
              <ListItem className="c-footer__email">
                <StyledA href="mailto:sales@votidetection.com">sales@votidetection.com</StyledA>
              </ListItem>
            </UnorderedList>
          </div>
          <div id="ligne">
            <StyledHr className="c-separator c-separator--dark c-separator--thin c-separator--left" />
          </div>
          <Social className="ml-auto mt-5">
            <SocialUnorderedList className="list-unstyled d-flex">
              <SocialListItem className="social-item">
                <StyledA target="_blank" href="https://fr-fr.facebook.com/pg/VOTIDetection">
                  <i aria-hidden="true" className="fa fa-facebook" />
                </StyledA>
              </SocialListItem>
              <SocialListItem className="social-item ml-5">
                <StyledA href="https://twitter.com/votidetection" target="_blank">
                  <i aria-hidden="true" className="fa fa-twitter" />
                </StyledA>
              </SocialListItem>
              <SocialListItem className="social-item ml-5">
                <StyledA href="https://www.linkedin.com/company/votidetection" target="_blank">
                  <i aria-hidden="true" className="fa fa-linkedin" />
                </StyledA>
              </SocialListItem>
            </SocialUnorderedList>
          </Social>
        </FooterContact>
      </Spacer>
      <div className="copy-txt">
        <Copyright className="container">
          <CopyrightText className="copyright-txt">
            © 2020 VOTI Detection Inc. - All rights reserved -{' '}
            <StyledA href="https://votidetection.com/terms-and-conditions/">
              Terms and conditions
            </StyledA>{' '}
            - <StyledA href="https://votidetection.com/privacy-policy/">Privacy policy</StyledA>
          </CopyrightText>
        </Copyright>
      </div>
    </Footer>
  );
}
export default MainFooter;
