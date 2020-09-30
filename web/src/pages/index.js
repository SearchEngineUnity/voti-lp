import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../containers/layout';
import LrHero from '../components/LrHero';
import LrForm from '../components/LrForm';
import LrContentBlock from '../components/LrContentBlock';
import Banner from '../components/Banner';
import LrCTA from '../components/LrCTA';
import ContactUs from '../components/ContactUs';

const LandingPage = () => (
  <Layout>
    <Helmet>
      <title>Voti Brochure Download</title>
      <meta name="description" content="" />
      <meta property="og:locale" content="en_CA" />
      {/* <meta property="og:type" content="" /> */}
      {/* <meta property="og:url" content="" /> */}
      {/* <meta property="og:title" content="" /> */}
      {/* <meta property="og:description" content="" /> */}
      {/* <meta property="og:image" content="" /> */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {/* <meta name="twitter:title" content="" /> */}
      {/* <meta name="twitter:description" content="" /> */}
      {/* <meta name="twitter:image" content="" /> */}
      <meta name="robots" content="noindex nofollow" />
    </Helmet>
    <LrHero />
    <LrForm />
    <LrContentBlock />
    <Banner />
    <LrCTA />
    <ContactUs />
  </Layout>
);

export default LandingPage;
