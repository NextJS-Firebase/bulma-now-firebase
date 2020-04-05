import styled from "styled-components";
import parse from "html-react-parser";

const PageWrapper = styled.div`
  .grid {
    display: grid;
    grid-template-columns: [xl-start] 1fr 1.5rem [md-start] minmax(0, 624px) [md-end] 1.5rem 1fr [xl-end];
  }
  .is-paddingless-horizontal {
    padding-left: 0;
    padding-right: 0;
  }
  .grid * {
    grid-column: md;
  }
  .grid-xl {
    grid-column: xl;
  }
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .no-vertical-padding {
    padding-top: 0;
  }
  .card {
    img {
      max-height: 200px;
    }
  }
`;
const Blog = (props) => {
  // note: this input is taken from flamelink, output of the wysiwyg react draftjs editor. Enclose with template strings `` -
  // deviate at your own risk (it'll break)
  const input = `<p>This is the content of the second blog!</p><table border="1" cellpadding="1" cellspacing="1" style="width:500px">	<tbody>		<tr>			<td>Table</td>			<td>1</td>		</tr>		<tr>			<td>Table 2</td>			<td>2</td>		</tr>		<tr>			<td>3</td>			<td>lsjl;ef</td>		</tr>	</tbody></table><br />Here&#39;s a code sample:<pre><code class="language-javascript">{  console.log('hello world');}</code></pre>&nbsp;<div style="text-align:center"><img alt="" height="100" src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1575404407/Raices/El%20Centro/centro.jpg" width="200" /></div>`;
  return (
    <PageWrapper>
      {/* Breadcrumbs */}
      <section className="section is-paddingless-horizontal">
        <div className="container grid">
          <nav className="breadcrumb grid-md" area-label="breadcrumbs">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li className="is-active">
                <a href="#" aria-current="page">
                  How to build a beautiful blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      {/* Blog Media Card */}
      <section className="section is-paddingless-horizontal no-vertical-padding">
        <div className="container grid">
          <article className="media center">
            <figure className="media-left">
              <figure className="image is-64x64">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1586113346/Raices/Scottie%27s%20Photos/headshot.png" />
              </figure>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Scottie Schneider </strong>
                  <a>@nomadsalsero</a>
                  <br></br>
                  <span className="has-text-grey">
                    A bit more grateful every day. <br></br>
                    <time datetime="2019-04-02">Apr 2nd</time> # 20 min read{" "}
                  </span>
                </p>
              </div>
            </div>
          </article>
          <div className="section is-paddingless-horizontal">
            <h1 className="title is-2">How to build a beautiful blog</h1>
            <h2 className="subtitle is-3">Learn from first principles</h2>
          </div>
          {/* Images for blog */}
          <figure className="columns is-variable is-mobile is-0 grid-xl">
            <div className="column">
              <div className="image card ">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/ar_2.0,c_crop/v1575403179/Raices/Poblado/poblado.jpg" />
              </div>
            </div>
            <div className="column">
              <div className="image card">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/ar_2.0,c_crop/v1575404089/Raices/Patio%20Bonito/patio_bonito.jpg" />
              </div>
            </div>
            <div className="column">
              <div className="image card">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/ar_2.0,c_crop/v1575404407/Raices/El%20Centro/centro.jpg" />
              </div>
            </div>
          </figure>
          {/* The subtitle */}
          <figcaption className="level">
            <small class="level-item has-text-grey">
              The blog we'll build...
            </small>
          </figcaption>
          {/* Blog Title */}
          <div className="content">{parse(input)}</div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Blog;
