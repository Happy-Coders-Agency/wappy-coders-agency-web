import Head from 'next/head';
import { Fragment } from 'react';
import NavBar from '../components/NavBar';
import TitleHeader from '../components/TitleHeader';
import TypeWriterHeader from '../components/TypeWriterHeader';
import ManifestoSection from '../components/ManifestoSection';
import Footer from '../components/Footer';

import '../styles/main.scss';

const Home = () => (
    <Fragment>
        <NavBar />
        <TitleHeader />
        <TypeWriterHeader />
        <ManifestoSection />
        <Footer />
    </Fragment>
);

export default Home;
