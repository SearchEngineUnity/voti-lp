import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import menuIcon from '../images/menu-icon.png';
import close from '../images/close-icon.png';

const VOHeader = styled.header`
  background-color: rgba(1, 1, 1, 0.1);
  z-index: 1;
  position: relative;
  border-bottom: 0px solid rgba(0, 0, 0, 0.125) !important;

  &:before {
    content: '';
    display: table;
    table-layout: fixed;
  }
`;

const TopMenu = styled.div`
  background: #3c6385;
  z-index: 1;
  position: relative;
  padding: 7px 0;

  @media (max-width: 991px) {
    display: none;
  }
`;

const TopHeaderContainer = styled.div`
  width: 94%;
  margin: 0 auto;
  display: flex;
`;

const TopMenuPrimary = styled.ul`
  padding: 0 10px;
  width: 100%;
  list-style: none;
  text-align: right;
  margin-bottom: 0;

  @media (max-width: 991px) {
    width: 93%;
  }

  @media (max-width: 767px) {
    width: calc(100% - 50px);
  }

  @media (max-width: 480px) {
    padding: 0 5px 0 0;
  }
`;

const MenuItem = styled.li`
  text-align: -webkit-match-parent;
  display: inline-block;
  padding: 0 1vw;

  @media (max-width: 600px) {
    padding: 0 0;
  }

  @media (max-width: 480px) {
    padding: 0 5px 0 0;
  }
`;

const NavLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  color: #fff;
  text-decoration: none;
  font-size: 11pt;
  padding-top: 0;
  padding-bottom: 0;
  transition: all 0.5s ease;

  &:hover {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 600px) {
    display: block;
    padding: 0 7px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 0;
  }
`;

const HeaderContainer = styled.div`
  width: 94%;
  margin: 0 auto;
  display: block;
`;

const SiteNav = styled(Navbar)`
  background: #193753;
  padding: 1rem;
  z-index: 1;
  @media (max-width: 991px) {
    display: block;
    min-height: 75px;
  }
`;

const LogoLink = styled.a`
  transition: all 0.5s ease;
  display: inline-block;
  margin-right: 1rem;
  float: left;
`;

const CustomLogo = styled.img`
  height: 60px;
  width: auto;
  max-width: 100%;

  @media (max-width: 991px) {
    height: 46px;
  }
`;

const NavbarToggler = styled(Navbar.Toggle)`
  @media (max-width: 991px) {
    color: #fff;
    position: absolute;
    right: 0;
    top: 10px;
    background: transparent;
    border: none;
    z-index: 99999;
    padding: 0;
    right: 20px;
    top: 22px;
  }
`;

const NavbarIcon = styled.span`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: '';
  background: no-repeat center center;
  background-size: 100% 100%;
  background-image: ${(props) => (props.open ? `url(${close})` : `url(${menuIcon})`)};
`;

const NavbarCollapse = styled(Navbar.Collapse)`
  @media (max-width: 991px) {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #193753;
    opacity: 0.9;
    padding: 30px 20px;
    height: 100vh;
    bottom: 0;
  }
  @media (min-width: 992px) {
    justify-content: flex-end;
  }
`;

const PrimaryMenu = styled(Nav)`
  padding-top: 17px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  @media (min-width: 992px) {
    -ms-flex-direction: row;
    flex-direction: row;
  }
`;

const PrimaryMenuItem = styled(Nav.Item)`
  display: list-item;
  text-align: -webkit-match-parent;

  @media (max-width: 991px) {
    margin-bottom: 14px;
  }
`;

const PrimaryMenuLink = styled.a`
  color: #fff;
  opacity: 1;
  font-weight: 600;
  padding: 0 1.5rem;

  &:hover {
    color: #fff;
    text-decoration: none;
    opacity: 0.75;
  }

  &:active {
    opacity: 1;
  }

  @media (max-width: 1180px) {
    padding: 0 14px;
  }

  @media (max-width: 991px) {
    padding: 0;
  }
`;

const MobMenuLang = styled.div`
  @media (max-width: 991px) {
    text-align: right;
    padding-top: 40px;
  }
  @media (min-width: 992px) {
    display: none !important;
  }
`;

const MobMenu = styled.ul`
  padding: 0 10px;
  @media (max-width: 991px) {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const MobMenuItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  @media (max-width: 991px) {
    margin-bottom: 14px;
  }
`;

const MobMenuLink = styled(Nav.Link)`
  transition: all 0.5s ease;
  @media (max-width: 600px){   
    padding: 10px;
  }

  @media (max-width: 991px){
    color: rgba(255,255,255,0.7);
    font-size: 16px;
    font-weight: 400;
    padding: 0;
  }
}
`;

function MainHeader() {
  const [open, setOpen] = useState(false);

  return (
    <VOHeader id="masthead" className="sticky-top">
      <TopMenu>
        <TopHeaderContainer>
          <TopMenuPrimary id="primary">
            <MenuItem>
              <NavLink href="https://votidetection.com/news-events/">News &amp; Events</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink href="https://vosp.votidetection.com" target="_blank" rel="noreferrer">
                VOSP
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink href="https://votidetection.com/investors/">Investors</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink href="https://votidetection.com/contact-us/">Contact Us</NavLink>
            </MenuItem>
            {/* Need to ask if they just want to point this to the french home page or simply remove the link */}
            <MenuItem>
              <NavLink href="https://votidetection.com/fr/">
                <span className="wpml-ls-native" lang="fr">
                  Fr
                </span>
              </NavLink>
            </MenuItem>
          </TopMenuPrimary>
        </TopHeaderContainer>
      </TopMenu>
      <SiteNav id="site-navigation" expand="lg">
        <HeaderContainer>
          <LogoLink href="https://votidetection.com/" rel="home">
            <CustomLogo
              width="133"
              height="59"
              src="https://votidetection.com/wp-content/uploads/2020/04/logo-white.png"
              alt="VOTI Detection"
            />
          </LogoLink>
          <NavbarToggler
            onClick={() => setOpen(!open)}
            className="collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#primary-menu-wrap"
            aria-controls="primary-menu-wrap"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <NavbarIcon open={open} />
          </NavbarToggler>
          <NavbarCollapse className="collapse">
            <div>
              <PrimaryMenu as="ul">
                <PrimaryMenuItem as="li">
                  <PrimaryMenuLink href="https://votidetection.com/products/">
                    Products
                  </PrimaryMenuLink>
                </PrimaryMenuItem>
                <PrimaryMenuItem as="li">
                  <PrimaryMenuLink href="https://votidetection.com/markets/">
                    Markets
                  </PrimaryMenuLink>
                </PrimaryMenuItem>
                <PrimaryMenuItem as="li">
                  <PrimaryMenuLink href="https://votidetection.com/technology/">
                    Technology
                  </PrimaryMenuLink>
                </PrimaryMenuItem>
                <PrimaryMenuItem as="li">
                  <PrimaryMenuLink href="https://votidetection.com/service-support/">
                    Service &amp; Support
                  </PrimaryMenuLink>
                </PrimaryMenuItem>
                <PrimaryMenuItem as="li">
                  <PrimaryMenuLink href="https://votidetection.com/media/">Media</PrimaryMenuLink>
                </PrimaryMenuItem>
                <PrimaryMenuItem as="li">
                  <PrimaryMenuLink href="https://votidetection.com/about-us/">
                    About
                  </PrimaryMenuLink>
                </PrimaryMenuItem>
                <PrimaryMenuItem as="li">
                  <PrimaryMenuLink href="https://votidetection.com/careers/">
                    Careers
                  </PrimaryMenuLink>
                </PrimaryMenuItem>
              </PrimaryMenu>
            </div>
            <MobMenuLang>
              <MobMenu id="primary">
                <MobMenuItem>
                  <MobMenuLink href="https://votidetection.com/news-events/" className="nav-link">
                    News &amp; Events
                  </MobMenuLink>
                </MobMenuItem>
                <MobMenuItem>
                  <MobMenuLink
                    href="https://vosp.votidetection.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    VOSP
                  </MobMenuLink>
                </MobMenuItem>
                <MobMenuItem>
                  <MobMenuLink href="https://votidetection.com/investors/">Investors</MobMenuLink>
                </MobMenuItem>
                <MobMenuItem>
                  <MobMenuLink href="https://votidetection.com/contact-us/">Contact Us</MobMenuLink>
                </MobMenuItem>
                <MobMenuItem>
                  <MobMenuLink href="https://votidetection.com/fr/marches/">
                    <span className="wpml-ls-native" lang="fr">
                      Fr
                    </span>
                  </MobMenuLink>
                </MobMenuItem>
              </MobMenu>
            </MobMenuLang>
          </NavbarCollapse>
        </HeaderContainer>
      </SiteNav>
    </VOHeader>
  );
}

export default MainHeader;
