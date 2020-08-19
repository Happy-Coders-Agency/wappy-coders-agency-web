import ClientServices from '../content/ClientServices.mdx';

const ClientSection = () => (
    <section className="section">
        <div className="container">
            <div className="collumns">
                <div className="column is-8-desktop is-offset-2-desktop">
                    <h1 id="clients" className="title">
                        Clients
                    </h1>
                    <div className="content">
                        Are you interested in beoming a client of us? Please
                        fill in this&nbsp;
                        <a
                            href="https://forms.gle/qxxx47qKTueHFGZq7"
                            target="_blank"
                            rel="noreferrer">
                            form
                        </a>
                        , and we will contact you within 24 hours.
                    </div>
                    <div className="content">
                        <p>So what can we do for you?</p>
                        <ul>
                            <li>
                                Analyze your CV and give suggestions on
                                improvements
                            </li>
                            <li>Help you with writing job applications</li>
                            <li>Coach you before an interview</li>
                            <li>
                                Let you redirect annoying recruiters{' '}
                                <a href="/representation">here</a>
                            </li>
                            <li>
                                Just be a friendly face in the chaotic world,
                                that is our business
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ClientSection;
