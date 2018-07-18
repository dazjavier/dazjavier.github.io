import React, { Component, Fragment } from "react";
import Particles from "react-particles-js";
import TwitterIcon from "./icons/Twitter";
import GithubIcon from "./icons/Github";
import particlesConfig from "./particlesConfig";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Particles className="App-particles-wrapper" params={particlesConfig} />
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Javier D&iacute;az G&oacute;mez</h1>
            <h3 className="App-subtitle">Software Engineer</h3>
          </header>
          <section>
            <p className="App-paragraph">
              JavaScript, React, Redux, MobX, NodeJS, Ruby, PHP@7, MySQL,
              MongoDB.
            </p>

            <nav className="App-social">
              <a
                href="https://twitter.com/daz_javier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>

              <a
                href="https://github.com/dazjavier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </nav>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default App;
