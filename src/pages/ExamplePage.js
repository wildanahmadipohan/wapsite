import Breadcrumb from 'elements/Breadcrumb';
import React, { Component } from 'react'

export class ExamplePage extends Component {
  render() {
    const data = [
      {pageTitle: 'Home', pageHref: '/'},
      {pageTitle: 'Projects', pageHref: '/projects'}
    ];

    return (
      <div className="container">
        <div className="row align-items-center justify-content-center" style={{height: '100vh'}}>
          <div className="col-auto">
            <Breadcrumb data={data} />
          </div>
        </div>
      </div>
    )
  }
}

export default ExamplePage