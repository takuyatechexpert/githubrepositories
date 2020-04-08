import React, { Component } from 'react';
// import axios from 'axios';


class Index extends Component {

  render() {
    return (
      <React.Fragment>
        <h1 className="header">GitHub Repositories</h1>

        <ul>
          <li>
            <a href="#">RepositoryName1</a>
          </li>
          <li>
            <a href="#">RepositoryName2</a>
          </li>
          <li>
            <a href="#">RepositoryName3</a>
          </li>
        </ul>

      </React.Fragment>
    );
  }
}

export default Index;
