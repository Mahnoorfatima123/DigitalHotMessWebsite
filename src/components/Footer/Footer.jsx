
import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#pablo">Home</a>
              </li>
              <li>
                <a href="#pablo">Profile</a>
              </li>
              <li>
                <a href="#pablo">Maps</a>
              </li>
              <li>
                <a href="#pablo">Blog</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            //<a href="http://www.creative-tim.com?ref=lbr-footer">
              Cuddle Buddy
            </a>
            , made with love for a better web
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
