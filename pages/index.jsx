import Head from 'next/head';
import { Fragment } from 'react';
import NavBar from '../components/NavBar';
import TitleHeader from '../components/TitleHeader';
import TypeWriterHeader from '../components/TypeWriterHeader';
import ManifestoSection from '../components/ManifestoSection';
import ClientSection from '../components/ClientsSection';
import Footer from '../components/Footer';

import '../styles/main.scss';
import PartnerSection from '../components/PartnerSection';
import { BeataNotification } from '../components/BetaNotification';
import WhoAreWeSection from '../components/WhoAreWeSection';

const Home = () => (
    <Fragment>
        <Head>
            <title>Happy Coders Agency</title>
            <meta
                name="description"
                content="An agency for developers that tries to get our clients as happy as they can be, making their career as great as it can get as a coder"
            />
        </Head>
        <BeataNotification />
        <NavBar />
        <TitleHeader />
        <TypeWriterHeader />
        <ManifestoSection />
        <ClientSection />
        <PartnerSection />
        <WhoAreWeSection />
        <Footer />
    </Fragment>
);

export default Home;
