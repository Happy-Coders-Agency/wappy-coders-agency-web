import { Fragment } from 'react';
import NavBar from '../components/NavBar';
import TitleHeader from '../components/TitleHeader';
import RepresentationText from '../content/RepresentationText.mdx';

import '../styles/main.scss';

const Representation = () => (
    <Fragment>
        <NavBar />
        <TitleHeader />
        <section className="section">
            <div className="container">
                <div className="collumns">
                    <div className="column is-8-desktop is-offset-2-desktop">
                        <div className="content">
                            <RepresentationText />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
);

export default Representation;
