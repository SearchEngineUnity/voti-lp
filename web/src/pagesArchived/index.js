import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../containers/layout';
import LrHero from '../components/StaticLrHero';
import LrForm from '../components/StaticLrForm';
import LrContentBlock from '../components/StaticLrContentBlock';
import Banner from '../components/StaticBanner';
import LrCTA from '../components/StaticLrCTA';
import ContactUs from '../components/StaticContactUs';
import MainFooter from '../components/MainFooter';

const LandingPage = () => (
  <Layout>
    <Helmet>
      <title>VOTI Detection Product Offerings for Threat Detection &amp; Management</title>
      <meta
        name="description"
        content="Download our full product brochure to learn more about all of VOTI’s product offerings for threat detection. We can help you better detect threats, and make threat management easier on your operators with 3D Perspective™ image technology, consistent OS updates, and with our remote support system."
      />
      <meta property="og:locale" content="en_CA" />
      {/* <meta property="og:type" content="" /> */}
      <meta property="og:url" content="https://learn.votidetection.com/" />
      <meta
        property="og:title"
        content="VOTI Detection Product Offerings for Threat Detection &amp; Management"
      />
      <meta
        property="og:description"
        content="Download our full product brochure to learn more about all of VOTI’s product offerings for threat detection. We can help you better detect threats, and make threat management easier on your operators with 3D Perspective™ image technology, consistent OS updates, and with our remote support system."
      />
      {/* <meta property="og:image" content="" /> */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      <meta
        name="twitter:title"
        content="VOTI Detection Product Offerings for Threat Detection &amp; Management"
      />
      <meta
        name="twitter:description"
        content="Download our full product brochure to learn more about all of VOTI’s product offerings for threat detection. We can help you better detect threats, and make threat management easier on your operators with 3D Perspective™ image technology, consistent OS updates, and with our remote support system."
      />
      {/* <meta name="twitter:image" content="" /> */}
      {/* <meta name="robots" content="noindex nofollow" /> */}
    </Helmet>
    {/* <p>Landing Page coming soon</p> */}
    {/* <LrHeader /> */}
    <LrHero />
    <LrForm />
    <LrContentBlock />
    <Banner />
    <LrCTA />
    <ContactUs />
    <MainFooter />
  </Layout>
);

export default LandingPage;
