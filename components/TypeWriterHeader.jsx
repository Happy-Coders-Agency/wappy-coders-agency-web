const TypeWriterHeader = () => (
  <section className="hero is-small is-black is-hidden-mobile">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="typewriter">
              <div className="typewriter-text">Are You a happy coder?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .typewriter {
          font-family: Courier, monospace;
          display: inline-block;
        }
        .typewriter .typewriter-text {
          display: inline-block;
          overflow: hidden;
          border-right: 0.15em solid #b86bff;
          white-space: nowrap;
          letter-spacing: 0.15em;
          animation: typing 5s steps(22, end),
            blink-caret 0.75s step-end infinite;
          box-sizing: border-box;
          font-size: 2.5em;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #b86bff;
          }
        }
      `}
    </style>
  </section>
);

export default TypeWriterHeader;
