export default () => (
  <div className="container">
    <div className="content">
      <h2>
        Find Out How Next.js Can
        <br /> Empower Your Team Today
      </h2>
      <a href="/now">
        <button>Learn More</button>
      </a>
    </div>

    <style jsx>
      {`
        .container {
          display: flex;
          justify-content: center;
          width: 100%;
          background-color: #1c1c1c;
          padding: 4rem 0;
          border-top: 2px solid #000;
          border-bottom: 2px solid #333333;
        }

        .content {
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 64rem;
          width: 100%;
          padding: 0 2rem;
        }

        a {
          height: unset;
          width: unset;
          margin-left: 4rem;
        }

        h2 {
          line-height: 1.4;
        }

        h3 {
          display: inline;
          margin: 0;
        }

        @media screen and (max-width: 640px) {
          h2 {
            text-align: center;
            margin-bottom: 50px;
          }

          .content {
            flex-direction: column;
          }

          h3 {
            display: block;
            margin: 0 0 2.5rem 0;
            max-width: 28rem;
          }

          a {
            margin: 0;
          }
        }
      `}
    </style>
  </div>
);