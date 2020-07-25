import Motivation from '../content/Motivation.mdx';
import Manifesto from '../content/Manifesto.mdx';
import Process from '../content/Process.mdx';

const ManifestoSection = () => (
    <section className="section">
        <div className="container">
            <div className="collumns">
                <div className="column is-8-desktop is-offset-2-desktop">
                    <h1 className="title">Happy Coders Agency</h1>
                    <div className="content">
                        <div className="box">
                            &quot;Hi! This is Nigel calling for London. I have a
                            fantastic opportunity for you&quot;
                        </div>
                        <Motivation />
                        <div id="manifesto" className="section manifesto">
                            <Manifesto />
                        </div>
                        <div className="section process">
                            <Process />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .box {
                background-color: #e0e0e0;
            }
            .manifesto {
                background-color: #f0e0ff;
            }
            .process {
                background-color: #beb1c9;
            }
        `}</style>
    </section>
);

export default ManifestoSection;
