import styled from "styled-components";
const PageWrapper = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    max-width: 160px;
  }
`;

const First = (props) => {
  return (
    <PageWrapper>
      <section className="hero ">
        <div className="hero-body">
          <div className="container center">
            <figure className="image center is-128x128">
              <img
                src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1586109498/Bulma/bulma-logo.png"
                alt="Made with Bulma"
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="section ">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <article className="media notification is-primary">
                <figure className="media-left">
                  <span className="icon is-medium">
                    <i className="fab fa-2x fa-css3-alt"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Bulma</h1>
                    <p className="is-size-5">
                      Bulma is a modern CSS framework, based on Flexbox. Using
                      bulma, we can describe our website's design using just
                      classes.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="media notification is-info">
                <figure className="media-left">
                  <span className="icon is-medium">
                    <i className="fab fa-2x fa-css3-alt"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Bulma</h1>
                    <p className="is-size-5">
                      Bulma is a modern CSS framework, based on Flexbox. Using
                      bulma, we can describe our website's design using just
                      classes.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="media notification is-success">
                <figure className="media-left">
                  <span className="icon is-medium">
                    <i className="fab fa-2x fa-css3-alt"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Bulma</h1>
                    <p className="is-size-5">
                      Bulma is a modern CSS framework, based on Flexbox. Using
                      bulma, we can describe our website's design using just
                      classes.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="media notification is-warning">
                <figure className="media-left">
                  <span className="icon is-medium">
                    <i className="fab fa-2x fa-css3-alt"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Bulma</h1>
                    <p className="is-size-5">
                      Bulma is a modern CSS framework, based on Flexbox. Using
                      bulma, we can describe our website's design using just
                      classes.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="media notification is-danger">
                <figure className="media-left">
                  <span className="icon is-medium">
                    <i className="fas fa-2x fa-align-justify"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Bulma</h1>
                    <p className="is-size-5">
                      Bulma is a modern CSS framework, based on Flexbox. Using
                      bulma, we can describe our website's design using just
                      classes.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default First;
